"use client";

import { useEffect, useRef, useState } from "react";
import { copy } from "@/content/copy.pt-BR";
import { Reveal } from "@/components/Reveal";

function StatNumber({
  value,
  suffix,
  decimals,
}: {
  value: number;
  suffix: string;
  decimals: number;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [display, setDisplay] = useState(() =>
    typeof IntersectionObserver === "undefined" ? value : 0,
  );
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          const prefersReduced = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
          ).matches;
          if (prefersReduced) {
            setDisplay(value);
            io.unobserve(el);
            return;
          }
          const duration = 1300;
          const start = performance.now();
          const step = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setDisplay(value * eased);
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          io.unobserve(el);
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, started]);

  const formatted = decimals
    ? display.toFixed(decimals).replace(".", ",")
    : Math.round(display).toString();

  return (
    <p
      ref={ref}
      className="text-[clamp(40px,6vw,64px)] font-bold leading-none text-orange tabular-nums"
    >
      {formatted}
      {suffix}
    </p>
  );
}

export function StatsRow() {
  const { stats } = copy;
  return (
    <section className="bg-graphite py-24">
      <div className="mx-auto max-w-[1320px] px-6 md:px-12">
        <Reveal className="mb-14 text-center">
          <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-white/60">
            {stats.eyebrow}
          </p>
        </Reveal>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 text-center md:grid-cols-4">
          {stats.items.map((item, i) => (
            <Reveal key={item.label} delay={i * 70}>
              <StatNumber value={item.value} suffix={item.suffix} decimals={item.decimals} />
              <p className="mt-3.5 text-[13px] font-semibold uppercase tracking-[0.1em] leading-snug text-white/50">
                {item.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
