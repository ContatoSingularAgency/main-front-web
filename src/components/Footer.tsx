import Image from "next/image";
import Link from "next/link";
import { copy } from "@/content/copy.pt-BR";
import { CopyButton } from "@/components/CopyButton";
import { InstagramIcon, LinkedinIcon } from "@/components/icons";

export function Footer() {
  const { footer } = copy;
  return (
    <footer className="bg-deep-ink">
      <div className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-between gap-6 border-b border-white/10 px-6 py-16 md:px-12">
        <h2 className="max-w-[560px] text-[clamp(24px,4vw,36px)] font-semibold tracking-[-0.01em] text-white text-balance">
          {footer.ctaHeadline}
        </h2>
        <a
          href="#contato"
          className="rounded-full bg-orange px-8 py-4 text-[14px] font-bold uppercase tracking-[0.04em] text-white transition-colors hover:bg-orange-hover"
        >
          {footer.cta}
        </a>
      </div>

      <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-10 px-6 py-16 sm:grid-cols-2 md:px-12 lg:grid-cols-[1.3fr_repeat(4,1fr)]">
        <div>
          <Image
            src="/images/logo/singular-lockup-horizontal-white.png"
            alt={copy.meta.siteName}
            width={220}
            height={73}
            className="mb-4 h-6 w-auto"
          />
          <p className="mb-3 text-sm leading-relaxed text-white/75">{footer.about}</p>
          <div className="flex flex-col items-start gap-2">
            <CopyButton value={footer.email} />
            <CopyButton value={footer.phone} />
          </div>
        </div>

        {footer.columns.map((col) => (
          <div key={col.title}>
            <h4 className="mb-[18px] text-xs font-semibold uppercase tracking-[0.1em] text-white/40">
              {col.title}
            </h4>
            <ul className="flex flex-col gap-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-between gap-4 border-t border-white/10 px-6 pb-10 pt-8 text-[13px] text-white/40 md:px-12">
        <p>{footer.copyright}</p>
        <div className="flex flex-wrap gap-6">
          {footer.legal.map((link) => (
            <Link key={link.label} href={link.href} className="hover:text-white/70">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex gap-3.5" aria-label="Redes sociais">
          <a
            href="#"
            aria-label="Instagram"
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/6"
          >
            <InstagramIcon className="h-4 w-4 stroke-white/75" />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/6"
          >
            <LinkedinIcon className="h-4 w-4 stroke-white/75" />
          </a>
        </div>
      </div>
    </footer>
  );
}
