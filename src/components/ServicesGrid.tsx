import Link from "next/link";
import { copy } from "@/content/copy.pt-BR";
import { Reveal } from "@/components/Reveal";
import { ArrowIcon } from "@/components/icons";

export function ServicesGrid() {
  const { services } = copy;
  return (
    <section id="servicos" className="bg-ivory py-24">
      <div className="mx-auto max-w-[1320px] px-6 md:px-12">
        <Reveal className="mb-14 flex max-w-[640px] flex-col gap-3.5">
          <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-stone-aa">
            {services.eyebrow}
          </p>
          <h2 className="text-[clamp(28px,4vw,40px)] font-semibold tracking-[-0.015em]">
            {services.headline}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <Link
                href={item.href}
                className="group relative block h-full rounded-card border border-warm-gray bg-white p-9 transition-all duration-200 hover:-translate-y-1 hover:border-orange"
              >
                <span className="absolute right-7 top-7 flex h-8 w-8 items-center justify-center rounded-lg bg-deep-ink/6 transition-colors group-hover:bg-orange">
                  <ArrowIcon className="h-4 w-4 stroke-soft-black transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:stroke-white" />
                </span>
                <p className="text-[13px] font-semibold tracking-[0.08em] text-stone-aa">
                  {item.number}
                </p>
                <h3 className="mt-3.5 mb-2.5 text-2xl font-semibold tracking-[-0.01em]">
                  {item.title}
                </h3>
                <p className="text-base leading-relaxed text-stone-aa">{item.body}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
