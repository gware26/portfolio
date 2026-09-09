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
    id: "udacity-android-fundamentals",
    name: "Android Developer Fundamentals",
    issuer: "Udacity",
    program: "Nanodegree Program",
    date: "2026-09-09",
    credentialUrl: "https://www.udacity.com/certificate/e/1f63af0a-abc5-11f1-8bcd-af1f4ccbdc47",
    fileUrl: "/docs/udacity-android-fundamentals.pdf",
    imageUrl: "/docs/udacity-android-fundamentals.jpg",
    skills: ["Android Development"],
  },
  {
    id: "udacity-programming-fundamentals",
    name: "Programming Fundamentals",
    issuer: "Udacity",
    program: "Nanodegree Program",
    date: "2026-09-08",
    credentialUrl: "https://www.udacity.com/certificate/e/7d95411e-abc1-11f1-ae65-f37f32868d50",
    fileUrl: "/docs/udacity-programming-fundamentals.pdf",
    imageUrl: "/docs/udacity-programming-fundamentals.jpg",
    skills: ["Programming Fundamentals"],
  },
  {
    id: "udacity-ai-fundamentals",
    name: "Artificial Intelligence Fundamentals",
    issuer: "Udacity",
    program: "Nanodegree Program",
    date: "2026-09-08",
    credentialUrl: "https://www.udacity.com/certificate/e/4ebd27e6-ab60-11f1-a1a4-cf6d0d2da117",
    fileUrl: "/docs/udacity-ai-fundamentals.pdf",
    imageUrl: "/docs/udacity-ai-fundamentals.jpg",
    skills: ["Artificial Intelligence"],
  },
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
