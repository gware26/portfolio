import { cn } from "@/lib/utils";

interface LogoMarkProps {
  className?: string;
  label?: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: "h-9 w-9 text-sm",
  md: "h-11 w-11 text-base",
  lg: "h-16 w-16 text-2xl",
};

export function LogoMark({ className, label = "G", size = "md" }: LogoMarkProps) {
  return (
    <span
      className={cn(
        "relative inline-grid shrink-0 place-items-center rounded-md border border-foreground bg-primary font-black text-primary-foreground shadow-[3px_3px_0_hsl(var(--foreground))]",
        sizes[size],
        className
      )}
      aria-hidden="true"
    >
      <span className="relative z-10">{label}</span>
      <span className="absolute right-1 top-1 h-2 w-2 rounded-full border border-foreground bg-accent" />
    </span>
  );
}
