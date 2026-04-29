import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius-md)] font-medium transition-colors duration-150 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[var(--color-ring)]",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--color-primary)] text-[var(--color-primary-foreground)] hover:bg-[var(--color-primary-hover)] shadow-[0_1px_2px_rgba(0,0,0,0.06)]",
        secondary:
          "bg-[var(--color-surface)] text-[var(--color-primary)] border border-[var(--color-border-strong)] hover:bg-[var(--color-cream-50)] hover:border-[var(--color-primary)]",
        ghost:
          "bg-transparent text-[var(--color-primary)] hover:bg-[var(--color-cream-200)]",
        invertedPrimary:
          "bg-[var(--color-accent)] text-[var(--color-accent-foreground)] hover:bg-[var(--color-gold-400)]",
        invertedSecondary:
          "bg-transparent text-[var(--color-inverse-foreground)] border border-[var(--color-inverse-border)] hover:bg-white/10 hover:border-white/40",
      },
      size: {
        md: "h-12 px-5 text-base",
        lg: "h-14 px-7 text-base md:text-lg",
        sm: "h-10 px-4 text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
