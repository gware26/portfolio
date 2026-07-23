export interface Project {
  id: string;
  title: string;
  kicker: string;
  description: string;
  image: string;
  techStack: string[];
  github: string;
  liveDemo?: string;
  featured?: boolean;
  year: string;
  impact: string;
}

export const projects: Project[] = [
  {
    id: "expert-advice",
    title: "Expert Advice Platform",
    kicker: "Knowledge sharing",
    description:
      "A guided advice experience that helps students discover practical recommendations, compare options, and move from uncertainty to action.",
    image: "/docs/expert_advices.png",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/yourusername/portfolio",
    liveDemo: "https://yourportfolio.com",
    featured: true,
    year: "2026",
    impact: "Designed for quick scanning, clear calls to action, and approachable expert content.",
  },
  {
    id: "pathfinder",
    title: "Pathfinder",
    kicker: "Student planning",
    description:
      "A career and study planning interface for mapping goals, recommended paths, resources, and progress checkpoints.",
    image: "/docs/pathfinder.png",
    techStack: ["React", "TypeScript", "Node.js", "Database Design"],
    github: "https://github.com/yourusername/task-manager",
    liveDemo: "https://taskmanager.demo.com",
    featured: true,
    year: "2025",
    impact: "Turns broad learning goals into structured, navigable steps.",
  },
  {
    id: "digital-voting",
    title: "Digital Voting System",
    kicker: "Secure workflows",
    description:
      "A voting workflow prototype focused on eligibility, clear ballot states, result visibility, and a dependable administrative experience.",
    image: "/docs/voting.png",
    techStack: ["Next.js", "PostgreSQL", "Prisma", "Zod"],
    github: "https://github.com/yourusername/ecommerce",
    featured: true,
    year: "2025",
    impact: "Explores trustworthy civic interfaces with strong validation and transparent states.",
  },
  {
    id: "portfolio-system",
    title: "Portfolio Design System",
    kicker: "Personal brand",
    description:
      "A handcrafted portfolio system with theme persistence, reusable cards, responsive layouts, motion primitives, and typed content.",
    image: "/image/gud_image.jpg",
    techStack: ["Next.js", "React", "Tailwind CSS", "shadcn/ui"],
    github: "https://github.com/yourusername/weather-dashboard",
    liveDemo: "https://weather.demo.com",
    year: "2026",
    impact: "A production-minded personal site built to be extended as experience grows.",
  },
];

export const projectFilters = [
  "All",
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "PostgreSQL",
] as const;
