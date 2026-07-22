export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string[];
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
      "Pursuing Bachelor of Science in Information Science",
      "Focus on software engineering, data structures, and algorithms",
      "Active participant in coding competitions and hackathons",
      "Building a strong foundation in computer science principles",
    ],
    type: "education",
  },
  {
    id: "2",
    title: "Personal Projects",
    company: "Self-employed",
    location: "Remote",
    startDate: "2021-01",
    current: true,
    description: [
      "Developing full-stack web applications using modern technologies",
      "Building responsive and accessible user interfaces",
      "Implementing RESTful APIs and database designs",
      "Contributing to open-source projects on GitHub",
    ],
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
      "Contributing to popular open-source projects",
      "Submitting bug fixes and feature implementations",
      "Participating in code reviews and discussions",
      "Building tools and utilities for the developer community",
    ],
    type: "project",
  },
  {
    id: "4",
    title: "Full Stack Developer Certification",
    company: "freeCodeCamp",
    location: "Online",
    startDate: "2023-01",
    endDate: "2023-06",
    current: false,
    description: [
      "Completed 300+ hours of coding curriculum",
      "Built 5 full-stack projects",
      "Mastered HTML, CSS, JavaScript, React, and Node.js",
      "Earned certification in APIs and Microservices",
    ],
    type: "certification",
  },
  {
    id: "5",
    title: "AWS Cloud Practitioner",
    company: "Amazon Web Services",
    location: "Online",
    startDate: "2023-08",
    endDate: "2023-09",
    current: false,
    description: [
      "Gained foundational understanding of AWS Cloud concepts",
      "Learned about AWS security, compliance, and pricing",
      "Understood core AWS services and their use cases",
      "Prepared for advanced AWS certifications",
    ],
    type: "certification",
  },
];
