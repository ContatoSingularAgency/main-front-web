export function OrbitDotPair({
  onDark = false,
  className = "",
}: {
  onDark?: boolean;
  className?: string;
}) {
  return (
    <div aria-hidden="true" className={`flex items-center mb-3.5 ${className}`}>
      <span className="block h-[26px] w-[26px] rounded-full bg-orange" />
      <span
        className={`block h-[26px] w-[26px] -ml-2 rounded-full ${
          onDark ? "bg-white/16" : "bg-deep-ink"
        }`}
      />
    </div>
  );
}
