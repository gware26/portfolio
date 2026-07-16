export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  gpa?: string;
  coursework: string[];
  highlights: string[];
  description?: string;
}

export const education: Education[] = [
  {
    id: "1",
    degree: "Bachelor of Science",
    field: "Information Science",
    institution: "Jimma University",
    location: "Jimma, Ethiopia",
    startDate: "2022-09",
    endDate: "2026-07",
    current: true,
    coursework: [
      "Data Structures and Algorithms",
      "Database Management Systems",
      "Software Engineering",
      "Web Development",
      "Computer Networks",
      "Operating Systems",
      "Artificial Intelligence",
      "Machine Learning",
    ],
    highlights: [
      "Building a foundation in information systems, software engineering, and database-backed applications.",
      "Practicing product-oriented development through personal projects and iterative UI work.",
      "Focused on internships and early-career software engineering roles before graduation.",
    ],
    description:
      "Studying Information Science with a practical focus on building reliable web applications and understanding how technology supports people, teams, and organizations.",
  },
];
