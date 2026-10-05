import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Textarea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "min-h-36 w-full resize-y border border-line bg-cream px-4 py-3 font-sans text-sm text-ink outline-none transition-[border-color,box-shadow] duration-150 ease-out placeholder:text-stone-light focus-visible:border-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/20 disabled:opacity-60",
        className,
      )}
      {...props}
    />
  );
}
