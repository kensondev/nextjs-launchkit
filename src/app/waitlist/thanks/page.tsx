import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: site.thanks.title,
  description: site.thanks.description,
  robots: { index: false, follow: false },
};

export default function ThanksPage() {
  return (
    <main id="main" className="simple-page">
      <div style={{ width: "100%", maxWidth: 640, margin: "0 auto" }}>
        <Link className="brand" href={site.links.home}>
          <span className="brand-mark" aria-hidden="true">
            ↗
          </span>
          {site.name}
        </Link>
        <section
          className="simple-card"
          style={{ marginTop: 40, textAlign: "center" }}
        >
          <div
            aria-hidden="true"
            style={{
              display: "grid",
              placeItems: "center",
              width: 64,
              height: 64,
              margin: "0 auto 32px",
              borderRadius: "50%",
              color: "var(--brand)",
              background: "var(--bg)",
              border: "1px solid var(--border)",
            }}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m5 12 4 4L19 6" />
            </svg>
          </div>
          <p className="eyebrow">{site.thanks.eyebrow}</p>
          <h1
            style={{
              margin: "18px 0",
              fontSize: "clamp(2.25rem, 6vw, 3.5rem)",
              letterSpacing: "-0.05em",
              lineHeight: 1.08,
            }}
          >
            {site.thanks.title}
          </h1>
          <p
            style={{
              maxWidth: 400,
              margin: "0 auto",
              color: "var(--muted)",
              lineHeight: 1.8,
            }}
          >
            {site.thanks.description}
          </p>
          <Link
            className="button button-primary"
            href={site.links.home}
            style={{ marginTop: 32 }}
          >
            <span aria-hidden="true">←</span> {site.thanks.button}
          </Link>
        </section>
      </div>
    </main>
  );
}
