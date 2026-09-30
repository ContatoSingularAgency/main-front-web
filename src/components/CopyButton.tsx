"use client";

import { useState } from "react";

export function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
    } catch {
      setCopied(false);
    } finally {
      setTimeout(() => setCopied(false), 1600);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="mt-1 inline-flex items-center gap-2 rounded-input border border-white/14 bg-white/8 px-3 py-2 text-[13px] text-white/80 transition-colors hover:bg-white/14"
    >
      {copied ? "Copiado ✓" : value}
    </button>
  );
}
