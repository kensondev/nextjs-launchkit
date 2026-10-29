import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: site.legal.termsTitle,
  description: site.legal.notice,
  alternates: { canonical: site.links.terms },
};

export default function TermsPage() {
  return (
    <LegalPage title={site.legal.termsTitle} sections={site.legal.terms} />
  );
}
