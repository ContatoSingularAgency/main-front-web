import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { OrbitDotPair } from "@/components/primitives/OrbitDotPair";
import { SignatureDash } from "@/components/primitives/SignatureDash";
import { BlueprintGrid } from "@/components/primitives/BlueprintGrid";
import { RadialGlow } from "@/components/primitives/RadialGlow";

export function DarkStatement({
  id,
  surface = "deep-ink",
  eyebrow,
  headline,
  headlineAccent,
  lede,
  cta,
  showOrbit = true,
  textureFlip = false,
}: {
  id?: string;
  surface?: "deep-ink" | "graphite";
  eyebrow: string;
  headline: string;
  headlineAccent: string;
  lede?: string;
  cta?: { label: string; href: string };
  showOrbit?: boolean;
  textureFlip?: boolean;
}) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden py-[120px] ${
        surface === "deep-ink" ? "bg-deep-ink" : "bg-graphite"
      }`}
    >
      <Image
        src="/images/photography/texture-statement.webp"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className={`object-cover opacity-[0.18] ${textureFlip ? "-scale-x-100" : ""}`}
      />
      <BlueprintGrid onDark />
      <RadialGlow className="left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2" />

      <div className="relative mx-auto max-w-[760px] px-6 text-center md:px-12">
        {showOrbit && (
          <Reveal className="flex justify-center">
            <OrbitDotPair onDark />
          </Reveal>
        )}
        <Reveal delay={40}>
          <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-white/60">
            {eyebrow}
          </p>
        </Reveal>
        <Reveal delay={70} className="flex justify-center">
          <SignatureDash />
        </Reveal>
        <Reveal delay={100}>
          <h2 className="text-[clamp(32px,7vw,72px)] font-bold leading-[1.06] tracking-[-0.02em] text-white">
            {headline} <em className="text-orange not-italic">{headlineAccent}</em>
          </h2>
        </Reveal>
        {lede && (
          <Reveal delay={140}>
            <p className="mx-auto mt-6 max-w-[520px] text-lg leading-relaxed text-white/60">
              {lede}
            </p>
          </Reveal>
        )}
        {cta && (
          <Reveal delay={180} className="mt-10 flex justify-center">
            <a
              href={cta.href}
              className="rounded-full bg-orange px-8 py-4 text-[14px] font-bold uppercase tracking-[0.04em] text-white transition-colors hover:bg-orange-hover"
            >
              {cta.label}
            </a>
          </Reveal>
        )}
      </div>
    </section>
  );
}
