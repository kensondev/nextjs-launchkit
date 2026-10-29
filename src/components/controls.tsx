"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { site } from "@/config/site";

export function ThemeToggle() {
  return (
    <button
      className="theme-toggle"
      aria-label={site.controls.theme}
      onClick={() => {
        const dark = !document.documentElement.classList.contains("dark");
        document.documentElement.classList.toggle("dark", dark);
        document.documentElement.style.colorScheme = dark ? "dark" : "light";
        try {
          localStorage.setItem("theme", dark ? "dark" : "light");
        } catch {
          /* The active theme still works when storage is unavailable. */
        }
      }}
    >
      <svg
        className="sun-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" />
      </svg>
      <svg
        className="moon-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        aria-hidden="true"
      >
        <path d="M20 15.5A8.5 8.5 0 0 1 8.5 4a8.5 8.5 0 1 0 11.5 11.5Z" />
      </svg>
    </button>
  );
}
export function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="mobile-menu">
      <button
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={site.controls.menu}
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
      </button>
      {open && (
        <nav id="mobile-navigation" aria-label={site.controls.menu}>
          {site.navigation.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            className="button button-primary"
            href={site.links.primary}
            onClick={() => setOpen(false)}
          >
            {site.navCta}
          </a>
        </nav>
      )}
    </div>
  );
}
export function WaitlistForm() {
  const [state, setState] = useState<
    { kind: "idle" } | { kind: "pending" } | { kind: "error"; message: string }
  >({ kind: "idle" });
  const router = useRouter();
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state.kind === "pending") return;
    const data = new FormData(event.currentTarget);
    const email = String(data.get("email") || "").trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
      setState({ kind: "error", message: site.waitlist.invalid });
      return;
    }
    setState({ kind: "pending" });
    try {
      const response = await fetch(site.links.waitlistApi, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, website: data.get("website") }),
      });
      if (!response.ok) {
        setState({
          kind: "error",
          message:
            response.status === 429
              ? site.waitlist.rateLimited
              : site.waitlist.failure,
        });
        return;
      }
      router.push(site.links.thanks);
    } catch {
      setState({ kind: "error", message: site.waitlist.failure });
    }
  }
  return (
    <form id="waitlist" className="waitlist-form" onSubmit={submit} noValidate>
      <div className="email-row">
        <label className="sr-only" htmlFor="waitlist-email">
          {site.waitlist.label}
        </label>
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <rect x="3" y="5" width="18" height="14" rx="3" />
          <path d="m3 6 9 7 9-7" />
        </svg>
        <input
          id="waitlist-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder={site.waitlist.placeholder}
          required
          maxLength={254}
          aria-invalid={state.kind === "error"}
          aria-describedby="waitlist-status waitlist-consent"
        />
        <button
          className="button button-primary"
          type="submit"
          disabled={state.kind === "pending"}
        >
          {state.kind === "pending"
            ? site.waitlist.pending
            : site.waitlist.button}
          <span aria-hidden="true">↗</span>
        </button>
      </div>
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="website">{site.waitlist.honeypot}</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <p id="waitlist-status" className="form-status" role="status">
        {state.kind === "error" ? state.message : site.hero.note}
      </p>
      <p id="waitlist-consent" className="form-consent">
        {site.waitlist.consent}{" "}
        <a href={site.links.privacy}>{site.waitlist.privacy}</a>.
      </p>
    </form>
  );
}
export function Pricing() {
  const [yearly, setYearly] = useState(false);
  return (
    <>
      <div
        className="billing-toggle"
        role="group"
        aria-label={site.pricing.title}
      >
        <button
          aria-pressed={!yearly}
          className={!yearly ? "selected" : ""}
          onClick={() => setYearly(false)}
        >
          {site.controls.monthly}
        </button>
        <button
          aria-pressed={yearly}
          className={yearly ? "selected" : ""}
          onClick={() => setYearly(true)}
        >
          {site.controls.yearly} <span>{site.controls.savings}</span>
        </button>
      </div>
      <div className="pricing-grid">
        {site.pricing.tiers.map((tier) => (
          <article
            className={`price-card ${tier.featured ? "featured" : ""}`}
            key={tier.name}
          >
            {tier.featured && (
              <span className="popular">{site.controls.recommended}</span>
            )}
            <h3>{tier.name}</h3>
            <p className="tier-description">{tier.description}</p>
            <p className="price">
              {site.controls.currency}
              {yearly ? tier.yearly : tier.monthly}
              <span>{site.controls.perMonth}</span>
            </p>
            <p className="billing-note">
              {yearly
                ? `${site.controls.currency}${tier.yearly * 12} · ${site.controls.billedYearly}`
                : site.controls.billedMonthly}
            </p>
            <a
              className={`button ${tier.featured ? "button-primary" : "button-outline"}`}
              href={site.links.primary}
            >
              {tier.cta}
              <span aria-hidden="true">↗</span>
            </a>
            <ul>
              {tier.features.map((feature) => (
                <li key={feature}>
                  <span aria-hidden="true">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <p className="demo-note">{site.pricing.note}</p>
    </>
  );
}
