import { cn } from "@/lib/utils";

export function Badge({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-mono-bg px-3 py-1 font-mono text-xs text-ink-2",
        className,
      )}
      {...props}
    />
  );
}
