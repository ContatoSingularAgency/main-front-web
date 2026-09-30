import Image from "next/image";
import { copy } from "@/content/copy.pt-BR";
import { Reveal } from "@/components/Reveal";
import { OrbitDotPair } from "@/components/primitives/OrbitDotPair";
import { RadialGlow } from "@/components/primitives/RadialGlow";

export function Hero() {
  const { hero } = copy;
  return (
    <section className="relative overflow-hidden bg-ivory py-[88px] md:py-32">
      <RadialGlow className="right-[-140px] top-[-160px] h-[520px] w-[520px]" />
      <div className="relative mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-12 px-6 md:px-12 lg:grid-cols-[1.15fr_.85fr] lg:gap-14">
        <div className="max-w-[640px]">
          <Reveal>
            <OrbitDotPair />
          </Reveal>
          <Reveal delay={40}>
            <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-stone-aa">
              {hero.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="my-4 text-[clamp(40px,7vw,84px)] font-bold leading-[1.02] tracking-[-0.02em] text-soft-black text-balance">
              {hero.headline} <em className="text-orange not-italic">{hero.headlineAccent}</em>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mb-10 max-w-[520px] text-lg leading-relaxed text-stone-aa">
              {hero.sub}
            </p>
          </Reveal>
          <Reveal delay={160} className="flex flex-wrap gap-4">
            <a
              href="#contato"
              className="rounded-full bg-orange px-8 py-4 text-[14px] font-bold uppercase tracking-[0.04em] text-white transition-colors hover:bg-orange-hover"
            >
              {hero.ctaPrimary}
            </a>
            <a
              href="#cases"
              className="rounded-full border-[1.5px] border-orange px-[30px] py-[14px] text-[14px] font-bold uppercase tracking-[0.04em] text-orange transition-colors hover:bg-orange hover:text-white"
            >
              {hero.ctaSecondary}
            </a>
          </Reveal>
        </div>

        <Reveal delay={100} className="relative isolate aspect-[4/5] overflow-hidden rounded-card">
          <Image
            src="/images/photography/hero.webp"
            alt={hero.imageAlt}
            fill
            priority
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(200deg, transparent 55%, rgba(23,32,42,.35))",
            }}
          />
        </Reveal>
      </div>
    </section>
  );
}
