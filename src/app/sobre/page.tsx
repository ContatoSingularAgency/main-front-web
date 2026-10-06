import type { Metadata } from "next";
import { copy } from "@/content/copy.pt-BR";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: copy.aboutPage.meta.title,
  description: copy.aboutPage.meta.description,
  alternates: { canonical: "/sobre" },
};

export default function SobrePage() {
  const { aboutPage, company } = copy;
  const addressLine = `${company.address.street}, ${company.address.complement} — ${company.address.neighborhood}, ${company.address.city}/${company.address.stateCode}, CEP ${company.address.zip}`;

  return (
    <>
      <PageHeader
        eyebrow={aboutPage.eyebrow}
        headline={aboutPage.headline}
        headlineAccent={aboutPage.headlineAccent}
        lede={aboutPage.lede}
      />

      <section className="bg-ivory pb-24">
        <div className="mx-auto max-w-[760px] px-6 md:px-12">
          <div className="flex flex-col gap-10">
            {aboutPage.sections.map((section, i) => (
              <Reveal key={section.heading} delay={Math.min(i * 60, 200)}>
                <h2 className="mb-3 text-xl font-semibold tracking-[-0.005em] text-soft-black">
                  {section.heading}
                </h2>
                <div className="flex flex-col gap-3">
                  {section.paragraphs.map((p, pi) => (
                    <p key={pi} className="text-base leading-relaxed text-stone-aa">
                      {p}
                    </p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={240} className="mt-14 rounded-card border border-warm-gray bg-white p-8">
            <h2 className="mb-2 text-base font-semibold text-soft-black">
              {aboutPage.legalHeading}
            </h2>
            <p className="mb-5 text-sm leading-relaxed text-stone-aa">{aboutPage.legalIntro}</p>
            <dl className="grid grid-cols-1 gap-4 text-sm sm:grid-cols-2">
              <div>
                <dt className="mb-1 text-[12px] font-semibold uppercase tracking-[0.08em] text-stone-aa">
                  Razão social
                </dt>
                <dd className="text-soft-black">{company.legalName}</dd>
              </div>
              <div>
                <dt className="mb-1 text-[12px] font-semibold uppercase tracking-[0.08em] text-stone-aa">
                  CNPJ
                </dt>
                <dd className="text-soft-black">{company.cnpj}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="mb-1 text-[12px] font-semibold uppercase tracking-[0.08em] text-stone-aa">
                  Endereço
                </dt>
                <dd className="text-soft-black">{addressLine}</dd>
              </div>
              <div>
                <dt className="mb-1 text-[12px] font-semibold uppercase tracking-[0.08em] text-stone-aa">
                  E-mail
                </dt>
                <dd>
                  <a href={`mailto:${company.email}`} className="text-orange hover:underline">
                    {company.email}
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>
    </>
  );
}
