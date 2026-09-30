import Image from "next/image";
import { copy } from "@/content/copy.pt-BR";
import { Reveal } from "@/components/Reveal";

export function CasesGrid() {
  const { cases } = copy;
  return (
    <section id="cases" className="bg-ivory py-24">
      <div className="mx-auto max-w-[1320px] px-6 md:px-12">
        <Reveal className="mb-14 flex max-w-[640px] flex-col gap-3.5">
          <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-stone-aa">
            {cases.eyebrow}
          </p>
          <h2 className="text-[clamp(28px,4vw,40px)] font-semibold tracking-[-0.015em]">
            {cases.headline}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {cases.items.map((item, i) => (
            <Reveal key={item.client} delay={i * 80}>
              <article className="group overflow-hidden rounded-card border border-warm-gray bg-white">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.1em] text-orange">
                    {item.sector}
                  </p>
                  <h3 className="mb-4 mt-2.5 text-xl font-semibold leading-snug tracking-[-0.005em]">
                    {item.headline}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {item.chips.map((chip) => (
                      <span
                        key={chip}
                        className="rounded-full bg-deep-ink/6 px-3 py-1.5 text-xs font-semibold"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
