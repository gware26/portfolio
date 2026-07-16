export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string[];
  technologies: string[];
  type: "work" | "education" | "project" | "certification";
}

export const experience: Experience[] = [
  {
    id: "1",
    title: "Information Science Student",
    company: "Jimma University",
    location: "Jimma, Ethiopia",
    startDate: "2022-09",
    current: true,
    description: [
      "Pursuing a Bachelor of Science in Information Science with coursework across software engineering, databases, networks, and AI.",
      "Applying academic concepts through full-stack projects and interface-focused product experiments.",
      "Developing stronger engineering habits around typing, validation, accessibility, and deployment.",
    ],
    technologies: ["Information Systems", "Software Engineering", "Databases", "Web Development"],
    type: "education",
  },
  {
    id: "2",
    title: "Personal Project Builder",
    company: "Independent",
    location: "Remote",
    startDate: "2021-01",
    current: true,
    description: [
      "Designing and shipping portfolio-ready projects using React, Next.js, TypeScript, and modern CSS.",
      "Building reusable UI patterns, typed data models, form validation, and responsive layouts.",
      "Treating personal projects as practice for production workflows: planning, testing, deployment, and documentation.",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zod"],
    type: "project",
  },
  {
    id: "3",
    title: "Open Source Contributions",
    company: "GitHub",
    location: "Remote",
    startDate: "2022-06",
    current: true,
    description: [
      "Learning from public codebases by reading issues, reviewing patterns, and contributing small improvements.",
      "Practicing clear pull request communication and respectful technical discussion.",
      "Prioritizing developer experience, documentation quality, and maintainable changes.",
    ],
    technologies: ["Git", "GitHub", "Documentation", "Code Review"],
    type: "project",
  },
  {
    id: "4",
    title: "Certification & Structured Learning",
    company: "Online Programs",
    location: "Online",
    startDate: "2023-01",
    current: true,
    description: [
      "Completing focused learning paths across frontend engineering, backend development, databases, and cloud deployment.",
      "Using each course as a starting point for a real implementation instead of stopping at exercises.",
      "Documenting gaps and follow-up topics to keep learning measurable.",
    ],
    technologies: ["React", "Node.js", "SQL", "Deployment"],
    type: "certification",
  },
];
