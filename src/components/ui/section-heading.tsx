import * as React from "react";

import { cn } from "@/lib/utils";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center" | "right";
}

const SectionHeading = React.forwardRef<HTMLHeadingElement, SectionHeadingProps>(
  ({ title, subtitle, description, align = "center", className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "mb-12 max-w-3xl",
          {
            "text-left": align === "left",
            "mx-auto text-center": align === "center",
            "text-right": align === "right",
          },
          className
        )}
        {...props}
      >
        {subtitle && (
          <p className="mb-4 font-mono text-sm font-bold uppercase text-primary">
            {subtitle}
          </p>
        )}
        <h2 className="text-balance text-4xl font-black leading-[0.95] sm:text-5xl md:text-6xl">
          {title}
        </h2>
        {description && (
          <p className={cn("mt-5 text-base leading-8 text-muted-foreground sm:text-lg", align === "center" && "mx-auto max-w-2xl")}>
            {description}
          </p>
        )}
      </div>
    );
  }
);
SectionHeading.displayName = "SectionHeading";

export { SectionHeading };
