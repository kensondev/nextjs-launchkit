import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: site.notFound.title,
  description: site.notFound.description,
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main id="main" className="simple-page">
      <div style={{ width: "100%", maxWidth: 640, margin: "0 auto" }}>
        <Link className="brand" href={site.links.home}>
          <span className="brand-mark" aria-hidden="true">
            ↗
          </span>
          {site.name}
        </Link>
        <section className="simple-card" style={{ marginTop: 40 }}>
          <p className="eyebrow">{site.notFound.eyebrow}</p>
          <h1
            style={{
              margin: "20px 0",
              fontSize: "clamp(2.5rem, 7vw, 4rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.05em",
            }}
          >
            {site.notFound.title}
          </h1>
          <p style={{ maxWidth: 420, color: "var(--muted)", lineHeight: 1.8 }}>
            {site.notFound.description}
          </p>
          <Link
            className="button button-primary"
            href={site.links.home}
            style={{ marginTop: 32 }}
          >
            <span aria-hidden="true">←</span> {site.notFound.button}
          </Link>
        </section>
      </div>
    </main>
  );
}
