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
          "mb-12",
          {
            "text-left": align === "left",
            "text-center": align === "center",
            "text-right": align === "right",
          },
          className
        )}
        {...props}
      >
        {subtitle && (
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">
            {subtitle}
          </p>
        )}
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>
    );
  }
);
SectionHeading.displayName = "SectionHeading";

export { SectionHeading };
