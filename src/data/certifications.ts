export interface Certification {
  id: string;
  name: string;
  issuer: string;
  program?: string;
  date: string;
  credentialUrl?: string;
  fileUrl?: string;
  imageUrl?: string;
  skills: string[];
}

export const certifications: Certification[] = [
  {
    id: "udacity-data-fundamentals",
    name: "Data Fundamentals",
    issuer: "Udacity",
    program: "Global Chapters - Ethiopia",
    date: "2026-08-28",
    credentialUrl: "https://confirm.udacity.com/lp/a43c7d15-68a8-4d64-b852-bd9214ecb55f",
    fileUrl: "/docs/udacity-data-fundamentals.pdf",
    imageUrl: "/docs/udacity-data-fundamentals.jpg",
    skills: ["Data Fundamentals"],
  },
];
