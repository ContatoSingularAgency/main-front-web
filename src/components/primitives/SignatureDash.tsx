export function SignatureDash({ className = "" }: { className?: string }) {
  return (
    <hr
      aria-hidden="true"
      className={`h-0.5 w-8 border-0 bg-orange my-3 ${className}`}
    />
  );
}
