export interface Skill {
  name: string;
  icon: string;
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
    name: "Programming Languages",
    icon: "layout",
    description: "Core languages used across full-stack and scripting work.",
    skills: [
      { name: "JavaScript", icon: "JS", detail: "Core language for full-stack development" },
      { name: "TypeScript", icon: "TS", detail: "Typed JavaScript for safer codebases" },
      { name: "Python", icon: "PY", detail: "Scripting and problem solving" },
      { name: "C#", icon: "C#", detail: "Object-oriented programming" },
      { name: "SQL", icon: "SQL", detail: "Relational queries and data modeling" },
    ],
  },
  {
    name: "Frameworks",
    icon: "server",
    description: "Libraries and frameworks for building full-stack applications.",
    skills: [
      { name: "React", icon: "RC", detail: "Component-based UI development" },
      { name: "Node.js", icon: "ND", detail: "Server-side JavaScript runtime" },
      { name: "Express.js", icon: "EX", detail: "REST API routing and middleware" },
      { name: "Bootstrap", icon: "BS", detail: "Responsive UI components" },
    ],
  },
  {
    name: "Databases",
    icon: "database",
    description: "Data storage and modeling across relational and document stores.",
    skills: [
      { name: "MongoDB", icon: "MG", detail: "Document-based data models" },
      { name: "MySQL", icon: "MY", detail: "Relational database design" },
    ],
  },
  {
    name: "Tools & DevOps",
    icon: "wrench",
    description: "The practical workflow around building, testing, and shipping software.",
    skills: [
      { name: "Git", icon: "GIT", detail: "Version control and branching" },
      { name: "GitHub", icon: "GH", detail: "Collaboration and code hosting" },
      { name: "Docker", icon: "DK", detail: "Containerized environments" },
      { name: "VS Code", icon: "VS", detail: "Primary development environment" },
      { name: "Postman", icon: "PM", detail: "API testing and documentation" },
      { name: "Figma", icon: "FG", detail: "Design handoff and UI review" },
    ],
  },
  {
    name: "Concepts & Soft Skills",
    icon: "users",
    description: "The engineering concepts and collaboration habits behind the code.",
    skills: [
      { name: "REST APIs", icon: "API", detail: "Designing secure, structured endpoints" },
      { name: "JWT Authentication", icon: "JWT", detail: "Role-based, token-based auth flows" },
      { name: "Responsive Design", icon: "RD", detail: "Layouts that adapt across devices" },
      { name: "OOP", icon: "OOP", detail: "Object-oriented programming" },
      { name: "Database Design", icon: "DB", detail: "Schema and relationship modeling" },
      { name: "Problem Solving", icon: "PS", detail: "Strong problem-solver and fast learner" },
      { name: "Communication", icon: "CM", detail: "Effective communication and collaboration in team environments" },
    ],
  },
];
