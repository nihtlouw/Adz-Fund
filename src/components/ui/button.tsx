import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-sans text-sm font-semibold tracking-wide whitespace-nowrap select-none outline-none transition-[background-color,color,border-color,transform,opacity] duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-forest disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.96]",
  {
    variants: {
      variant: {
        primary: "bg-forest text-cream hover:bg-forest-dark",
        inverse: "bg-cream text-ink hover:bg-paper-warm",
        outline:
          "border border-line bg-transparent text-ink hover:border-ink hover:bg-cream",
        ghost: "bg-transparent text-cream hover:bg-cream/10",
        dark: "bg-ink text-cream hover:bg-ink-soft",
      },
      size: {
        default: "h-12 px-6",
        sm: "h-10 px-4 text-xs",
        lg: "h-14 px-8",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
