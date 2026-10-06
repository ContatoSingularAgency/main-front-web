import type { Metadata } from "next";
import { copy } from "@/content/copy.pt-BR";
import { PageHeader } from "@/components/PageHeader";
import { LegalContent } from "@/components/LegalContent";

export const metadata: Metadata = {
  title: copy.termsPage.meta.title,
  description: copy.termsPage.meta.description,
  alternates: { canonical: "/termos" },
};

export default function TermosPage() {
  const { termsPage } = copy;
  return (
    <>
      <PageHeader eyebrow={termsPage.eyebrow} headline={termsPage.headline} />
      <LegalContent
        updatedAt={termsPage.updatedAt}
        intro={termsPage.intro}
        sections={termsPage.sections}
      />
    </>
  );
}
