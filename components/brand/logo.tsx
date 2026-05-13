import Image from "next/image";
import { cn } from "@/lib/utils";
import { asset } from "@/lib/asset-path";

export function Logo({
  className,
  inverse = false,
}: {
  className?: string;
  inverse?: boolean;
}) {
  const img = (
    <Image
      src={asset("/images/logo.png")}
      alt="The Graham Insurance Group, Medicare Professional"
      width={1000}
      height={250}
      priority
      className="h-12 md:h-16 w-auto"
    />
  );

  if (inverse) {
    return (
      <span
        className={cn(
          "inline-flex items-center rounded-lg bg-[var(--color-cream-50)] px-4 py-2.5 ring-1 ring-[rgba(255,255,255,0.08)] shadow-[0_8px_24px_-12px_rgba(0,0,0,0.45)]",
          className,
        )}
      >
        {img}
      </span>
    );
  }

  return (
    <span className={cn("inline-flex items-center", className)}>{img}</span>
  );
}
