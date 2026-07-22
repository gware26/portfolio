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
    gpa: "3.8/4.0",
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
    description: "Specializing in software engineering with a focus on building scalable web applications and understanding modern development practices.",
  },
];
