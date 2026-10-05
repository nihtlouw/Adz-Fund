import { cn } from "@/lib/utils";

export function PlaceholderNote({ className }: { className?: string }) {
  return (
    <p
      className={cn(
        "text-[11px] font-semibold tracking-[0.16em] text-stone uppercase",
        className,
      )}
    >
      Placeholder copy pending approval
    </p>
  );
}
