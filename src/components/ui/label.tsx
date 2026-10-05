import type { LabelHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Label({ className, ...props }: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn(
        "block text-xs font-semibold tracking-[0.14em] text-ink-soft uppercase",
        className,
      )}
      {...props}
    />
  );
}
