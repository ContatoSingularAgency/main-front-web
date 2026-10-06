import { Reveal } from "@/components/Reveal";
import { OrbitDotPair } from "@/components/primitives/OrbitDotPair";

export function PageHeader({
  eyebrow,
  headline,
  headlineAccent,
  lede,
}: {
  eyebrow: string;
  headline: string;
  headlineAccent?: string;
  lede?: string;
}) {
  return (
    <section className="bg-ivory pb-16 pt-16 md:pt-24">
      <div className="mx-auto max-w-[800px] px-6 md:px-12">
        <Reveal>
          <OrbitDotPair />
        </Reveal>
        <Reveal delay={40}>
          <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-stone-aa">
            {eyebrow}
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="my-4 text-[clamp(32px,6vw,56px)] font-bold leading-[1.05] tracking-[-0.02em] text-soft-black text-balance">
            {headline}
            {headlineAccent ? (
              <>
                {" "}
                <em className="text-orange not-italic">{headlineAccent}</em>
              </>
            ) : null}
          </h1>
        </Reveal>
        {lede && (
          <Reveal delay={120}>
            <p className="max-w-[600px] text-lg leading-relaxed text-stone-aa">{lede}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
