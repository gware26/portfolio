export interface Skill {
  name: string;
  icon: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export const skills: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "React", icon: "⚛️", level: "Advanced" },
      { name: "Next.js", icon: "▲", level: "Advanced" },
      { name: "TypeScript", icon: "📘", level: "Advanced" },
      { name: "Tailwind CSS", icon: "🎨", level: "Advanced" },
      { name: "Framer Motion", icon: "🎭", level: "Intermediate" },
      { name: "Vue.js", icon: "💚", level: "Intermediate" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: "🟢", level: "Advanced" },
      { name: "Express", icon: "⚡", level: "Advanced" },
      { name: "Python", icon: "🐍", level: "Intermediate" },
      { name: "NestJS", icon: "🪺", level: "Intermediate" },
      { name: "GraphQL", icon: "◈", level: "Intermediate" },
    ],
  },
  {
    name: "Database",
    skills: [
      { name: "PostgreSQL", icon: "🐘", level: "Intermediate" },
      { name: "MongoDB", icon: "🍃", level: "Advanced" },
      { name: "Redis", icon: "🔴", level: "Intermediate" },
      { name: "Prisma", icon: "🔮", level: "Advanced" },
    ],
  },
  {
    name: "Tools",
    skills: [
      { name: "Git", icon: "📦", level: "Advanced" },
      { name: "Docker", icon: "🐳", level: "Intermediate" },
      { name: "AWS", icon: "☁️", level: "Intermediate" },
      { name: "Vercel", icon: "▲", level: "Advanced" },
      { name: "Figma", icon: "🎨", level: "Intermediate" },
    ],
  },
  {
    name: "Soft Skills",
    skills: [
      { name: "Problem Solving", icon: "🧩", level: "Expert" },
      { name: "Communication", icon: "💬", level: "Advanced" },
      { name: "Teamwork", icon: "🤝", level: "Advanced" },
      { name: "Leadership", icon: "👑", level: "Intermediate" },
      { name: "Adaptability", icon: "🔄", level: "Advanced" },
    ],
  },
];