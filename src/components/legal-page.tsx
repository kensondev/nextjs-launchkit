import Link from "next/link";
import { site } from "@/config/site";

type LegalPageProps = {
  title: string;
  sections: typeof site.legal.privacy;
};

export function LegalPage({ title, sections }: LegalPageProps) {
  return (
    <main id="main" className="simple-page">
      <div style={{ width: "100%", maxWidth: 760, margin: "0 auto" }}>
        <Link href={site.links.home} className="brand">
          <span className="brand-mark" aria-hidden="true">
            ↗
          </span>
          {site.name}
        </Link>
        <article className="simple-card" style={{ marginTop: 40 }}>
          <header>
            <p className="eyebrow">{site.name}</p>
            <h1
              style={{
                fontSize: "clamp(2rem, 6vw, 3.25rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.045em",
                margin: "16px 0",
              }}
            >
              {title}
            </h1>
            <p style={{ color: "var(--muted)", fontSize: 14 }}>
              {site.legal.updated}
            </p>
          </header>
          <aside
            style={{
              margin: "28px 0 36px",
              padding: 20,
              border: "1px solid var(--border)",
              borderRadius: 12,
              background: "var(--bg)",
              color: "var(--muted)",
              lineHeight: 1.7,
            }}
          >
            {site.legal.notice}
          </aside>
          {sections.map((section) => (
            <section key={section.heading} style={{ marginTop: 28 }}>
              <h2
                style={{
                  fontSize: 20,
                  letterSpacing: "-0.025em",
                  marginBottom: 10,
                }}
              >
                {section.heading}
              </h2>
              <p style={{ color: "var(--muted)", lineHeight: 1.85 }}>
                {section.body}
              </p>
            </section>
          ))}
          <footer
            style={{
              marginTop: 36,
              paddingTop: 24,
              borderTop: "1px solid var(--border)",
              lineHeight: 1.8,
            }}
          >
            <p>
              {site.legal.contact}{" "}
              <a
                href={`mailto:${site.email}`}
                style={{ color: "var(--brand)", overflowWrap: "anywhere" }}
              >
                {site.email}
              </a>
            </p>
          </footer>
        </article>
        <Link
          className="button"
          href={site.links.home}
          style={{ marginTop: 24 }}
        >
          <span aria-hidden="true">←</span> {site.thanks.button}
        </Link>
      </div>
    </main>
  );
}
