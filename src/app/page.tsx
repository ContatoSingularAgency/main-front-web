import { copy } from "@/content/copy.pt-BR";
import { Hero } from "@/components/Hero";
import { LogoMarquee } from "@/components/LogoMarquee";
import { ServicesGrid } from "@/components/ServicesGrid";
import { DarkStatement } from "@/components/DarkStatement";
import { StatsRow } from "@/components/StatsRow";
import { CasesGrid } from "@/components/CasesGrid";
import { Testimonial } from "@/components/Testimonial";
import { ContactForm } from "@/components/ContactForm";

export default function Home() {
  return (
    <main id="top">
      <Hero />
      <LogoMarquee />
      <ServicesGrid />
      <DarkStatement
        id="sobre"
        surface="deep-ink"
        eyebrow={copy.statementBrand.eyebrow}
        headline={copy.statementBrand.headline}
        headlineAccent={copy.statementBrand.headlineAccent}
        lede={copy.statementBrand.lede}
      />
      <StatsRow />
      <CasesGrid />
      <Testimonial />
      <DarkStatement
        surface="graphite"
        eyebrow={copy.statementCta.eyebrow}
        headline={copy.statementCta.headline}
        headlineAccent={copy.statementCta.headlineAccent}
        lede={copy.statementCta.lede}
        cta={{ label: copy.statementCta.cta, href: "#contato" }}
        showOrbit={false}
        textureFlip
      />
      <ContactForm />
    </main>
  );
}
