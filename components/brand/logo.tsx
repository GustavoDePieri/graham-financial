import { cn } from "@/lib/utils";

export function Logo({
  className,
  inverse = false,
}: {
  className?: string;
  inverse?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-baseline gap-1.5",
        inverse ? "text-white" : "text-[var(--color-primary)]",
        className,
      )}
      aria-label="Graham Financial Group"
    >
      <span className="font-display text-[1.375rem] md:text-2xl font-semibold tracking-tight leading-none">
        Graham
      </span>
      <span
        className={cn(
          "font-sans text-[0.6875rem] md:text-xs uppercase font-semibold tracking-[0.18em] leading-none",
          inverse
            ? "text-[var(--color-gold-300)]"
            : "text-[var(--color-accent)]",
        )}
      >
        Financial
      </span>
    </span>
  );
}
