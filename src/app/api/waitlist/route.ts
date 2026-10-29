import { isIP } from "node:net";
import { site } from "@/config/site";

const WINDOW_MS = 60_000;
const MAX_ATTEMPTS = 5;
const MAX_CLIENTS = 10_000;
const MAX_BODY_BYTES = 8_192;
const PROVIDER_TIMEOUT_MS = 8_000;
const attempts = new Map<string, { count: number; expiresAt: number }>();

type Submission =
  { kind: "honeypot" } | { kind: "invalid" } | { kind: "email"; email: string };

type Delivery = "delivered" | "unavailable" | "failed";

function json(body: object, status: number, headers?: Record<string, string>) {
  return Response.json(body, {
    status,
    headers: { "Cache-Control": "no-store", ...headers },
  });
}

function clientIp(request: Request): string {
  const forwarded = request.headers
    .get("x-forwarded-for")
    ?.split(",", 1)[0]
    ?.trim();
  const real = request.headers.get("x-real-ip")?.trim();
  if (forwarded && isIP(forwarded)) return forwarded;
  if (real && isIP(real)) return real;
  return "unknown";
}

function retryAfter(ip: string): number {
  const now = Date.now();
  for (const [key, entry] of attempts) {
    if (entry.expiresAt <= now) attempts.delete(key);
  }

  const entry = attempts.get(ip);
  if (entry) {
    if (entry.count >= MAX_ATTEMPTS) {
      return Math.max(1, Math.ceil((entry.expiresAt - now) / 1_000));
    }
    entry.count += 1;
    return 0;
  }

  if (attempts.size >= MAX_CLIENTS) return WINDOW_MS / 1_000;
  attempts.set(ip, { count: 1, expiresAt: now + WINDOW_MS });
  return 0;
}

async function readJson(request: Request): Promise<unknown> {
  if (!request.body) throw new Error("missing_body");

  const reader = request.body.getReader();
  const decoder = new TextDecoder("utf-8", { fatal: true });
  let bytes = 0;
  let text = "";
  try {
    while (true) {
      const chunk = await reader.read();
      if (chunk.done) break;
      bytes += chunk.value.byteLength;
      if (bytes > MAX_BODY_BYTES) {
        await reader.cancel();
        throw new Error("body_too_large");
      }
      text += decoder.decode(chunk.value, { stream: true });
    }
    text += decoder.decode();
    const value: unknown = JSON.parse(text);
    return value;
  } finally {
    reader.releaseLock();
  }
}

function parseSubmission(input: unknown): Submission {
  if (typeof input !== "object" || input === null || Array.isArray(input)) {
    return { kind: "invalid" };
  }

  if ("website" in input) {
    if (typeof input.website !== "string") return { kind: "invalid" };
    if (input.website.trim()) return { kind: "honeypot" };
  }

  if (!("email" in input) || typeof input.email !== "string") {
    return { kind: "invalid" };
  }

  const email = input.email.trim();
  const [local, domain] = email.split("@");
  if (
    email.length > 254 ||
    !local ||
    local.length > 64 ||
    !domain ||
    !/^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(
      email,
    ) ||
    local.startsWith(".") ||
    local.endsWith(".") ||
    local.includes("..") ||
    domain
      .split(".")
      .some(
        (label) =>
          !label ||
          label.length > 63 ||
          label.startsWith("-") ||
          label.endsWith("-"),
      )
  ) {
    return { kind: "invalid" };
  }

  return { kind: "email", email };
}

async function deliver(email: string): Promise<Delivery> {
  const provider = process.env.WAITLIST_PROVIDER?.trim() || "console";

  if (provider === "console") {
    console.info(
      JSON.stringify({
        event: "waitlist.signup",
        provider: "console",
        email,
        timestamp: new Date().toISOString(),
      }),
    );
    return "delivered";
  }

  let url: URL;
  let headers: Record<string, string>;
  let payload: object;

  if (provider === "webhook") {
    const webhookUrl = process.env.WAITLIST_WEBHOOK_URL?.trim();
    if (!webhookUrl) return "unavailable";
    try {
      url = new URL(webhookUrl);
    } catch {
      return "unavailable";
    }
    if (
      !["https:", "http:"].includes(url.protocol) ||
      url.username ||
      url.password
    ) {
      return "unavailable";
    }
    headers = { "Content-Type": "application/json" };
    payload = { email };
  } else if (provider === "resend") {
    const apiKey = process.env.RESEND_API_KEY?.trim();
    const audienceId = process.env.RESEND_AUDIENCE_ID?.trim();
    if (!apiKey || !audienceId) return "unavailable";
    url = new URL(
      `https://api.resend.com/audiences/${encodeURIComponent(audienceId)}/contacts`,
    );
    headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    };
    payload = { email, unsubscribed: false };
  } else {
    return "unavailable";
  }

  try {
    const response = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(PROVIDER_TIMEOUT_MS),
      redirect: "error",
      cache: "no-store",
    });
    await response.body?.cancel();
    if (response.ok) return "delivered";
    console.error(
      JSON.stringify({
        event: "waitlist.delivery_failed",
        provider,
        status: response.status,
      }),
    );
    return "failed";
  } catch {
    console.error(
      JSON.stringify({ event: "waitlist.delivery_failed", provider }),
    );
    return "failed";
  }
}

export async function POST(request: Request) {
  const retry = retryAfter(clientIp(request));
  if (retry) {
    return json({ success: false, error: site.waitlist.rateLimited }, 429, {
      "Retry-After": String(retry),
    });
  }

  let input: unknown;
  try {
    input = await readJson(request);
  } catch {
    return json({ success: false, error: site.waitlist.malformed }, 400);
  }

  const submission = parseSubmission(input);
  if (submission.kind === "invalid") {
    return json({ success: false, error: site.waitlist.invalid }, 400);
  }
  if (submission.kind === "honeypot") {
    return json({ success: true, message: site.waitlist.success }, 200);
  }

  const delivery = await deliver(submission.email);
  if (delivery === "unavailable") {
    return json({ success: false, error: site.waitlist.unavailable }, 503);
  }
  if (delivery === "failed") {
    return json({ success: false, error: site.waitlist.failure }, 502);
  }
  return json({ success: true, message: site.waitlist.success }, 200);
}
