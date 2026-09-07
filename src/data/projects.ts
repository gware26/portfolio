export interface Project {
  id: string;
  title: string;
  kicker: string;
  description: string;
  problem?: string;
  features?: string[];
  image?: string;
  techStack: string[];
  github?: string;
  liveDemo?: string;
  featured?: boolean;
  year?: string;
  impact: string;
}

export const projects: Project[] = [
  {
    id: "ethiopath",
    title: "EthioPath AI",
    kicker: "Academic & career pathfinder",
    description:
      "An AI-assisted, privacy-first academic and career pathfinder for Ethiopian freshman students. Guided assessments map a student's interests, strengths, and values to broad academic fields, then surface the Ethiopian universities where that path can begin.",
    problem:
      "Many students entering Ethiopian universities are unsure which field suits their talents. EthioPath works as an orientation guide, helping them discover broad academic fields before committing to a department.",
    features: [
      "Guided assessment covering interests, subjects, skills, values, and work settings",
      "Transparent scoring with category breakdowns and plain-language match reasons",
      "Explore 8 study areas spanning 37 verified national departments",
      "Side-by-side department comparison and next-step planning",
      "100% on-device privacy: assessment data stays in the browser, never sent to a server",
      "Optional in-browser AI, language selector, dark mode, and installable as a PWA",
    ],
    image: "/docs/ethiopath.jpg",
    techStack: ["Next.js", "React", "TypeScript", "Browser AI", "PWA"],
    liveDemo: "https://ethiopath.vercel.app",
    featured: true,
    year: "2026",
    impact: "Turns a stressful department choice into a structured, explainable, privacy-respecting process.",
  },
  {
    id: "ketari",
    title: "KETARI AI Recruitment",
    kicker: "Professional experience",
    description:
      "The Intelligent Job Matching and Recruitment Automation Platform engineered as a Website Developer at the Sidama Technology and Innovation Agency. A full-stack MERN application with AI-powered resume parsing and semantic job matching.",
    problem:
      "Manual recruitment is slow and opaque. KETARI automates the full lifecycle: candidate registration, AI CV parsing and transparent matching, ranking, HR expert screening, interview scheduling, HR manager approval, and final selection.",
    features: [
      "AI-powered resume parsing and semantic job matching",
      "Role-based JWT authentication for employer, job seeker, and admin dashboards",
      "Secure REST API backed by MongoDB for resume uploads and an AI recommendation engine",
      "Vacancy posting and job browsing with English/Amharic interface and dark mode",
    ],
    image: "/docs/ketari.jpg",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "REST APIs"],
    featured: true,
    year: "2026",
    impact: "Powers separate employer, job seeker, and admin experiences on one secure, AI-assisted platform.",
  },
  {
    id: "student-voting-system",
    title: "Online Student Voting System",
    kicker: "Secure civic workflow",
    description:
      "Secure online voting platform for university student union elections, with a full admin dashboard for managing elections, candidates, and voters.",
    features: [
      "bcrypt password hashing and PDO prepared statements",
      "CSRF protection on all state-changing forms",
      "Admin dashboard for elections, candidates, and voter management",
    ],
    image: "/docs/voting.png",
    techStack: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/gware26/Online_Student_Voting_sytem",
    featured: true,
    year: "2026",
    impact: "Protects ballot integrity with hashed credentials, prepared statements, and CSRF defenses.",
  },
  {
    id: "booklab",
    title: "BookLab",
    kicker: "Online book store",
    description:
      "Responsive online book store with book search, a user-friendly browsing interface, and a mobile-responsive layout.",
    image: "/docs/booklab.jpg",
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/gware26/BookLab",
    liveDemo: "https://book-lab-delta.vercel.app",
    year: "2026",
    impact: "A clean storefront experience built mobile-first and deployed on Vercel.",
  },
  {
    id: "super-market",
    title: "Shashe Supermarket",
    kicker: "E-commerce storefront",
    description: "Responsive e-commerce style website for a supermarket, deployed on Vercel.",
    image: "/docs/super-market.jpg",
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/gware26/super-market",
    liveDemo: "https://super-market-sigma.vercel.app",
    year: "2025",
    impact: "A fully responsive storefront layout shipped to production.",
  },
  {
    id: "guess-my-number",
    title: "Guess My Number",
    kicker: "Interactive browser game",
    description:
      "Interactive browser game built with JavaScript and DOM manipulation, featuring real-time feedback, score tracking, and a persistent high score.",
    image: "/docs/guess-my-number.png",
    techStack: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/gware26/guess-my-number",
    liveDemo: "https://guess-my-number-sand.vercel.app",
    year: "2025",
    impact: "A focused exercise in DOM state management and instant UI feedback.",
  },
  {
    id: "portfolio",
    title: "Personal Portfolio",
    kicker: "This website",
    description:
      "The site you are viewing: a typed, content-driven portfolio with light/dark themes, reusable UI primitives, and restrained motion.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/gware26/portfolio",
    liveDemo: "https://gudina.vercel.app",
    year: "2026",
    impact: "Built to be extended as experience grows, with all content living in typed data files.",
  },
];

export const projectFilters = [
  "All",
  "Next.js",
  "React",
  "JavaScript",
  "Node.js",
  "MongoDB",
  "PHP",
  "MySQL",
] as const;