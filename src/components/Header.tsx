"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { copy } from "@/content/copy.pt-BR";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    document.addEventListener("scroll", onScroll, { passive: true });
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-[env(safe-area-inset-top,0px)] z-50 border-b bg-ivory/92 backdrop-blur-md transition-colors duration-200 ${
        scrolled ? "border-warm-gray" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1320px] items-center justify-between gap-4 px-6 md:px-12">
        <Link href="/" className="flex items-center">
          <Image 
            src="/images/logo/singular-mark.png"
            alt={copy.meta.siteName}
            width={220}
            height={73}
            className="h-14 w-auto"

          />
          <Image
            src="/images/logo/singular-lockup-horizontal.png"
            alt={copy.meta.siteName}
            width={220}
            height={73}
            priority
            className="h-14 w-auto"
          />
        </Link>

        <nav aria-label="Navegação principal" className="hidden items-center gap-8 text-sm font-medium lg:flex">
          {copy.nav.items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-1 transition-colors hover:text-orange"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#contato"
            className="hidden rounded-full bg-orange px-6 py-3 text-[13px] font-bold uppercase tracking-[0.04em] text-white transition-colors hover:bg-orange-hover sm:inline-block"
          >
            {copy.nav.cta}
          </a>
          <button
            type="button"
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex w-6 flex-col gap-1 p-1 lg:hidden"
          >
            <span className="h-0.5 rounded-full bg-soft-black" />
            <span className="h-0.5 rounded-full bg-soft-black" />
            <span className="h-0.5 rounded-full bg-soft-black" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          aria-label="Navegação mobile"
          className="flex flex-col gap-1 border-t border-warm-gray bg-ivory px-6 py-4 lg:hidden"
        >
          {copy.nav.items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-md px-2 py-3 text-sm font-medium hover:bg-black/5"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setMenuOpen(false)}
            className="mt-2 rounded-full bg-orange px-6 py-3 text-center text-[13px] font-bold uppercase tracking-[0.04em] text-white sm:hidden"
          >
            {copy.nav.cta}
          </a>
        </nav>
      )}
    </header>
  );
}
