export type SkillIcon =
  | "javascript"
  | "typescript"
  | "python"
  | "csharp"
  | "sql"
  | "react"
  | "nodejs"
  | "express"
  | "bootstrap"
  | "mongodb"
  | "mysql"
  | "git"
  | "github"
  | "docker"
  | "vscode"
  | "postman"
  | "figma"
  | "api"
  | "jwt"
  | "responsive"
  | "oop"
  | "database"
  | "problem-solving"
  | "communication";

export interface Skill {
  name: string;
  icon: SkillIcon;
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
      { name: "JavaScript", icon: "javascript", detail: "Core language for full-stack development" },
      { name: "TypeScript", icon: "typescript", detail: "Typed JavaScript for safer codebases" },
      { name: "Python", icon: "python", detail: "Scripting and problem solving" },
      { name: "C#", icon: "csharp", detail: "Object-oriented programming" },
      { name: "SQL", icon: "sql", detail: "Relational queries and data modeling" },
    ],
  },
  {
    name: "Frameworks",
    icon: "server",
    description: "Libraries and frameworks for building full-stack applications.",
    skills: [
      { name: "React", icon: "react", detail: "Component-based UI development" },
      { name: "Node.js", icon: "nodejs", detail: "Server-side JavaScript runtime" },
      { name: "Express.js", icon: "express", detail: "REST API routing and middleware" },
      { name: "Bootstrap", icon: "bootstrap", detail: "Responsive UI components" },
    ],
  },
  {
    name: "Databases",
    icon: "database",
    description: "Data storage and modeling across relational and document stores.",
    skills: [
      { name: "MongoDB", icon: "mongodb", detail: "Document-based data models" },
      { name: "MySQL", icon: "mysql", detail: "Relational database design" },
    ],
  },
  {
    name: "Tools & DevOps",
    icon: "wrench",
    description: "The practical workflow around building, testing, and shipping software.",
    skills: [
      { name: "Git", icon: "git", detail: "Version control and branching" },
      { name: "GitHub", icon: "github", detail: "Collaboration and code hosting" },
      { name: "Docker", icon: "docker", detail: "Containerized environments" },
      { name: "VS Code", icon: "vscode", detail: "Primary development environment" },
      { name: "Postman", icon: "postman", detail: "API testing and documentation" },
      { name: "Figma", icon: "figma", detail: "Design handoff and UI review" },
    ],
  },
  {
    name: "Concepts & Soft Skills",
    icon: "users",
    description: "The engineering concepts and collaboration habits behind the code.",
    skills: [
      { name: "REST APIs", icon: "api", detail: "Designing secure, structured endpoints" },
      { name: "JWT Authentication", icon: "jwt", detail: "Role-based, token-based auth flows" },
      { name: "Responsive Design", icon: "responsive", detail: "Layouts that adapt across devices" },
      { name: "OOP", icon: "oop", detail: "Object-oriented programming" },
      { name: "Database Design", icon: "database", detail: "Schema and relationship modeling" },
      { name: "Problem Solving", icon: "problem-solving", detail: "Strong problem-solver and fast learner" },
      { name: "Communication", icon: "communication", detail: "Effective communication and collaboration in team environments" },
    ],
  },
];