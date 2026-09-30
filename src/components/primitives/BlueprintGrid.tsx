export function BlueprintGrid({ onDark = false }: { onDark?: boolean }) {
  const line = onDark ? "rgba(255,255,255,.05)" : "rgba(23,32,42,.045)";
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage: `linear-gradient(${line} 1px, transparent 1px), linear-gradient(90deg, ${line} 1px, transparent 1px)`,
        backgroundSize: "72px 72px",
      }}
    />
  );
}
