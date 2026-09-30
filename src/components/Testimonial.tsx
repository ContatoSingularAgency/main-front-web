import { copy } from "@/content/copy.pt-BR";
import { Reveal } from "@/components/Reveal";
import { SignatureDash } from "@/components/primitives/SignatureDash";

export function Testimonial() {
  const { testimonial } = copy;
  return (
    <section className="bg-deep-ink py-[120px]">
      <Reveal className="mx-auto max-w-[680px] px-6 text-center md:px-12">
        <div className="flex justify-center">
          <SignatureDash />
        </div>
        <blockquote className="text-[clamp(22px,3.4vw,30px)] font-medium leading-snug text-white text-balance">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
        <cite className="mt-7 block text-sm not-italic text-white/55">
          {testimonial.attribution}
        </cite>
      </Reveal>
    </section>
  );
}
