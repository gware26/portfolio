export interface Skill {
  name: string;
  icon: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  detail: string;
}

export interface SkillCategory {
  name: string;
  description: string;
  icon: "layout" | "server" | "database" | "wrench" | "users";
  skills: Skill[];
}

export const skills: SkillCategory[] = [
  {
    name: "Frontend",
    icon: "layout",
    description: "Interfaces, component systems, accessibility, and motion.",
    skills: [
      { name: "React", icon: "React", level: "Advanced", detail: "Component architecture and hooks" },
      { name: "Next.js", icon: "Next", level: "Advanced", detail: "App Router and performance" },
      { name: "TypeScript", icon: "TS", level: "Advanced", detail: "Typed UI and data contracts" },
      { name: "Tailwind CSS", icon: "TW", level: "Advanced", detail: "Responsive design systems" },
      { name: "Framer Motion", icon: "FM", level: "Intermediate", detail: "Scroll and interaction polish" },
    ],
  },
  {
    name: "Backend",
    icon: "server",
    description: "APIs, validation, authentication flows, and service design.",
    skills: [
      { name: "Node.js", icon: "ND", level: "Advanced", detail: "REST services and tooling" },
      { name: "Express", icon: "EX", level: "Advanced", detail: "Routing and middleware" },
      { name: "Python", icon: "PY", level: "Intermediate", detail: "Scripting and problem solving" },
      { name: "Zod", icon: "ZD", level: "Intermediate", detail: "Runtime validation" },
    ],
  },
  {
    name: "Database",
    icon: "database",
    description: "Schemas, queries, relationships, and durable application data.",
    skills: [
      { name: "PostgreSQL", icon: "PG", level: "Intermediate", detail: "Relational modeling" },
      { name: "MongoDB", icon: "DB", level: "Intermediate", detail: "Document data models" },
      { name: "Prisma", icon: "PR", level: "Intermediate", detail: "Typed database access" },
      { name: "SQL", icon: "SQL", level: "Intermediate", detail: "Queries and normalization" },
    ],
  },
  {
    name: "Tools",
    icon: "wrench",
    description: "The practical workflow around shipping and maintaining software.",
    skills: [
      { name: "Git", icon: "Git", level: "Advanced", detail: "Branching and review habits" },
      { name: "Vercel", icon: "VC", level: "Advanced", detail: "Deployment and previews" },
      { name: "Figma", icon: "FG", level: "Intermediate", detail: "Design handoff and UI critique" },
      { name: "ESLint", icon: "ES", level: "Intermediate", detail: "Code quality guardrails" },
    ],
  },
  {
    name: "Soft Skills",
    icon: "users",
    description: "The collaboration habits that make engineering work better.",
    skills: [
      { name: "Problem Solving", icon: "PS", level: "Advanced", detail: "Break down ambiguous work" },
      { name: "Communication", icon: "CM", level: "Advanced", detail: "Clear updates and tradeoffs" },
      { name: "Teamwork", icon: "TM", level: "Advanced", detail: "Reliable collaboration" },
      { name: "Adaptability", icon: "AD", level: "Advanced", detail: "Learn quickly under change" },
    ],
  },
];
