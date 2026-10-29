import { site } from "@/config/site";
import {
  ThemeToggle,
  MobileMenu,
  WaitlistForm,
  Pricing,
} from "@/components/controls";
import { Dashboard } from "@/components/dashboard";

function Icon({ name }: { name: string }) {
  const paths: Record<string, string> = {
    bolt: "m13 2-9 12h7l-1 8 10-13h-7l1-7Z",
    layout:
      "M3 9h18M9 9v12M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z",
    mail: "m3 6 9 7 9-7M5 4h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z",
    sun: "M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z",
    globe:
      "M3 12h18M12 3c5 5 5 13 0 18-5-5-5-13 0-18Zm9 9a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
    sliders: "M4 7h7m4 0h5M4 17h3m4 0h9M11 4v6M7 14v6",
  };
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={paths[name] || paths.bolt} />
    </svg>
  );
}
function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">
        <span />
        {eyebrow}
      </p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.productName,
    description: site.description,
    url: site.url,
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <header className="site-header">
        <div className="nav-inner">
          <a className="brand" href={site.links.home} aria-label={site.name}>
            <span className="brand-mark" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="m5 17 6-11h7l-6 11H5Z" fill="currentColor" />
                <path d="m12 19 7-13" stroke="currentColor" strokeWidth="2.5" />
              </svg>
            </span>
            {site.name}
            <span className="brand-period">.</span>
          </a>
          <nav className="desktop-navigation" aria-label={site.name}>
            {site.navigation.map((link) => (
              <a href={link.href} key={link.label}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className="nav-actions">
            <ThemeToggle />
            <a
              className="button button-small button-dark nav-cta"
              href={site.links.primary}
            >
              {site.navCta}
              <span aria-hidden="true">↗</span>
            </a>
            <MobileMenu />
          </div>
        </div>
      </header>
      <main id="main">
        <section className="hero">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-orb" aria-hidden="true" />
          <div className="hero-content">
            <div className="announcement">
              <span className="status-dot" />
              {site.hero.badge}
              <span className="announcement-arrow" aria-hidden="true">
                ↗
              </span>
            </div>
            <h1>
              {site.hero.title}
              <br />
              <span>{site.hero.accent}</span>
            </h1>
            <p className="hero-description">{site.hero.description}</p>
            <WaitlistForm />
            <a className="preview-link" href={site.links.secondary}>
              <span className="play-icon" aria-hidden="true">
                ▷
              </span>
              {site.hero.secondary}
              <span aria-hidden="true">↗</span>
            </a>
            <div className="hero-social">
              <div className="avatar-stack">
                {site.hero.avatars.map((initials) => (
                  <span key={initials}>{initials}</span>
                ))}
              </div>
              <div>
                <div className="social-stars" aria-hidden="true">
                  ✦ ✦ ✦ ✦ ✦
                </div>
                <p>{site.hero.social}</p>
              </div>
            </div>
          </div>
          <div className="hero-corner hero-corner-left" aria-hidden="true">
            +
          </div>
          <div className="hero-corner hero-corner-right" aria-hidden="true">
            +
          </div>
        </section>
        {site.sections.logos && (
          <section
            className="logo-section container"
            aria-labelledby="logo-heading"
          >
            <h2 id="logo-heading">{site.logos.heading}</h2>
            <div className="logo-cloud">
              {site.logos.names.map((name, index) => (
                <div key={name}>
                  <span
                    className={`company-symbol symbol-${index}`}
                    aria-hidden="true"
                  >
                    {["▱", "◒", "◎", "◭", "▥"][index]}
                  </span>
                  {name}
                </div>
              ))}
            </div>
          </section>
        )}
        {site.sections.features && (
          <section id="features" className="section container">
            <SectionHeading {...site.features} />
            <div className="feature-grid">
              {site.features.items.map((item) => (
                <article className="feature-card" key={item.title}>
                  <span className="feature-icon">
                    <Icon name={item.icon} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </section>
        )}
        {site.sections.howItWorks && (
          <section id="how-it-works" className="section how-section">
            <div className="container">
              <SectionHeading {...site.how} />
              <div className="steps-grid">
                {site.how.steps.map((step, index) => (
                  <article key={step.title}>
                    <div className="step-number">
                      0{index + 1}
                      <span aria-hidden="true">↗</span>
                    </div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}
        {site.sections.preview && (
          <section id="preview" className="section preview-section container">
            <SectionHeading {...site.preview} />
            <div className="preview-backdrop">
              <div className="preview-badge">
                <span />
                {site.preview.badge}
              </div>
              <Dashboard />
            </div>
            <p className="demo-note">{site.preview.footer}</p>
          </section>
        )}
        {site.sections.testimonials && (
          <section className="section testimonial-section">
            <div className="container">
              <SectionHeading {...site.testimonials} />
              <div className="testimonial-grid">
                {site.testimonials.items.map((item) => (
                  <figure className="testimonial-card" key={item.name}>
                    <div className="quote-stars" aria-label={site.testimonials.ratingLabel}>
                      ★★★★★
                    </div>
                    <blockquote>“{item.quote}”</blockquote>
                    <figcaption>
                      <span className="testimonial-avatar">
                        {item.initials}
                      </span>
                      <span>
                        <strong>{item.name}</strong>
                        <span>{item.role}</span>
                      </span>
                      <span className="quote-mark" aria-hidden="true">
                        ”
                      </span>
                    </figcaption>
                  </figure>
                ))}
              </div>
              <p className="demo-note">{site.testimonials.disclaimer}</p>
            </div>
          </section>
        )}
        {site.sections.pricing && (
          <section id="pricing" className="section container pricing-section">
            <SectionHeading {...site.pricing} />
            <Pricing />
          </section>
        )}
        {site.sections.faq && (
          <section id="faq" className="section faq-section container">
            <SectionHeading {...site.faq} />
            <div className="faq-list">
              {site.faq.items.map((item) => (
                <details key={item.question}>
                  <summary>
                    {item.question}
                    <span className="faq-plus" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </section>
        )}
        {site.sections.finalCta && (
          <section className="final-section container">
            <div className="final-card">
              <div className="final-orbit" aria-hidden="true" />
              <p className="eyebrow">
                <span />
                {site.finalCta.eyebrow}
              </p>
              <h2>{site.finalCta.title}</h2>
              <p>{site.finalCta.description}</p>
              <a className="button button-primary" href={site.links.primary}>
                {site.finalCta.button}
                <span aria-hidden="true">↗</span>
              </a>
              <span className="final-spark" aria-hidden="true">
                ✳
              </span>
            </div>
          </section>
        )}
      </main>
      <footer className="site-footer container">
        <div className="footer-top">
          <div>
            <a className="brand" href={site.links.home}>
              <span className="brand-mark" aria-hidden="true">
                ↗
              </span>
              {site.name}
              <span className="brand-period">.</span>
            </a>
            <p>{site.footer.tagline}</p>
          </div>
          <nav aria-label={site.footer.note}>
            {site.navigation.map((link) => (
              <a href={link.href} key={link.label}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="footer-bottom">
          <p>
            © {site.footer.year} {site.footer.copyright}
          </p>
          <span>{site.footer.note}</span>
          <div>
            <a href={site.links.privacy}>{site.footer.privacy}</a>
            <a href={site.links.terms}>{site.footer.terms}</a>
            <ThemeToggle />
          </div>
        </div>
      </footer>
    </>
  );
}
