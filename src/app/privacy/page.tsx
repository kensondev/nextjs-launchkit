import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: site.legal.privacyTitle,
  description: site.legal.notice,
  alternates: { canonical: site.links.privacy },
};

export default function PrivacyPage() {
  return (
    <LegalPage title={site.legal.privacyTitle} sections={site.legal.privacy} />
  );
}
