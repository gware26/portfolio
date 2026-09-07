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
    title: "Website Developer",
    company: "Sidama Technology and Innovation Agency",
    location: "Sidama, Ethiopia (Remote)",
    startDate: "2026-06",
    current: true,
    description: [
      "Engineered the Intelligent Job Matching and Recruitment Automation Platform, a full-stack MERN application with AI-powered resume parsing and semantic job matching.",
      "Built role-based JWT authentication supporting separate employer, job seeker, and admin dashboards.",
      "Designed a secure REST API backed by MongoDB to power resume uploads and an AI recommendation engine.",
    ],
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT Authentication", "REST APIs"],
    type: "work",
  },
];
