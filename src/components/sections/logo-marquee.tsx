const logoItems = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind",
  "Node.js",
  "Postgres",
  "Prisma",
  "Figma",
];

export function LogoMarquee() {
  return (
    <div className="overflow-hidden border-y border-foreground bg-card" aria-label="Technology stack marquee">
      <div className="flex w-max animate-logo-marquee gap-3 py-3">
        {[...logoItems, ...logoItems].map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="grid h-12 min-w-36 place-items-center rounded-md border border-foreground bg-background px-5 font-mono text-sm font-bold"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
