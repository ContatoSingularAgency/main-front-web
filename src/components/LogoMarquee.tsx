import { copy } from "@/content/copy.pt-BR";

export function LogoMarquee() {
  const { marquee } = copy;
  const track = [...marquee.clients, ...marquee.clients];
  return (
    <section
      aria-label={marquee.eyebrow}
      className="overflow-hidden bg-deep-ink py-7"
    >
      <p className="mb-[18px] text-center text-[13px] font-semibold uppercase tracking-[0.12em] text-white/60">
        {marquee.eyebrow}
      </p>
      <div
        className="group overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
        }}
      >
        <div className="marquee-track flex w-max items-center gap-16 group-hover:[animation-play-state:paused]">
          {track.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="whitespace-nowrap text-xl font-bold tracking-[0.02em] text-white/45"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
