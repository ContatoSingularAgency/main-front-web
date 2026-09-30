export function RadialGlow({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full blur-[2px] ${className}`}
      style={{
        background:
          "radial-gradient(circle, rgba(240,90,40,.18) 0%, transparent 70%)",
      }}
    />
  );
}
