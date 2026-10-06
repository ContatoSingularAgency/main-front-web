import type { Metadata } from "next";
import { copy } from "@/content/copy.pt-BR";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://singularagency.com.br";

export const metadata: Metadata = {
  title: copy.contactPage.meta.title,
  description: copy.contactPage.meta.description,
  alternates: { canonical: "/contato" },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: copy.company.tradeName,
  legalName: copy.company.legalName,
  taxID: copy.company.cnpj,
  url: `${siteUrl}/contato`,
  email: copy.company.email,
  telephone: copy.company.phoneLink,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${copy.company.address.street}, ${copy.company.address.complement}`,
    addressLocality: copy.company.address.city,
    addressRegion: copy.company.address.stateCode,
    postalCode: copy.company.address.zip,
    addressCountry: "BR",
  },
};

export default function ContatoPage() {
  const { contactPage, company } = copy;
  const addressLine = `${company.address.street}, ${company.address.complement} — ${company.address.neighborhood}, ${company.address.city}/${company.address.stateCode}, CEP ${company.address.zip}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />

      <PageHeader
        eyebrow={contactPage.eyebrow}
        headline={contactPage.headline}
        lede={contactPage.lede}
      />

      <section className="bg-ivory pb-16">
        <div className="mx-auto max-w-[800px] px-6 md:px-12">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {contactPage.channels.map((channel, i) => (
              <Reveal key={channel.label} delay={i * 60}>
                <a
                  href={channel.href}
                  className="block rounded-card border border-warm-gray bg-white p-6 transition-colors hover:border-orange"
                >
                  <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-stone-aa">
                    {channel.label}
                  </p>
                  <p className="mt-2 break-words text-base font-medium text-soft-black">
                    {channel.value}
                  </p>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200} className="mt-4">
            <div className="rounded-card border border-warm-gray bg-white p-6">
              <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-stone-aa">
                {contactPage.addressLabel}
              </p>
              <p className="mt-2 text-base font-medium text-soft-black">{addressLine}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
