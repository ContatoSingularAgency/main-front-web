import { Reveal } from "@/components/Reveal";

export function LegalContent({
  updatedAt,
  intro,
  sections,
}: {
  updatedAt: string;
  intro: string;
  sections: readonly { heading: string; paragraphs: readonly string[] }[];
}) {
  return (
    <section className="bg-ivory pb-24">
      <div className="mx-auto max-w-[760px] px-6 md:px-12">
        <Reveal>
          <p className="mb-8 text-sm font-medium text-stone-aa">{updatedAt}</p>
          <p className="mb-12 text-lg leading-relaxed text-soft-black">{intro}</p>
        </Reveal>

        <div className="flex flex-col gap-10">
          {sections.map((section, i) => (
            <Reveal key={section.heading} delay={Math.min(i * 40, 200)}>
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
      </div>
    </section>
  );
}
