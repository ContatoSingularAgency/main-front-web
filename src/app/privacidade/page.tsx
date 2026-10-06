import type { Metadata } from "next";
import { copy } from "@/content/copy.pt-BR";
import { PageHeader } from "@/components/PageHeader";
import { LegalContent } from "@/components/LegalContent";

export const metadata: Metadata = {
  title: copy.privacyPage.meta.title,
  description: copy.privacyPage.meta.description,
  alternates: { canonical: "/privacidade" },
};

export default function PrivacidadePage() {
  const { privacyPage } = copy;
  return (
    <>
      <PageHeader eyebrow={privacyPage.eyebrow} headline={privacyPage.headline} />
      <LegalContent
        updatedAt={privacyPage.updatedAt}
        intro={privacyPage.intro}
        sections={privacyPage.sections}
      />
    </>
  );
}
