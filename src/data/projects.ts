export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  github: string;
  liveDemo?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features smooth animations, dark mode support, and optimized performance.",
    image: "/images/projects/portfolio.jpg",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/yourusername/portfolio",
    liveDemo: "https://yourportfolio.com",
    featured: true,
  },
  {
    id: "2",
    title: "Task Management App",
    description: "A full-stack task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/images/projects/task-manager.jpg",
    techStack: ["React", "Node.js", "MongoDB", "Socket.io"],
    github: "https://github.com/yourusername/task-manager",
    liveDemo: "https://taskmanager.demo.com",
  },
  {
    id: "3",
    title: "E-commerce Platform",
    description: "A scalable e-commerce platform with payment integration, inventory management, and admin dashboard.",
    image: "/images/projects/ecommerce.jpg",
    techStack: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
    github: "https://github.com/yourusername/ecommerce",
  },
  {
    id: "4",
    title: "Weather Dashboard",
    description: "A beautiful weather dashboard with location-based forecasts, interactive maps, and historical data visualization.",
    image: "/images/projects/weather.jpg",
    techStack: ["React", "OpenWeather API", "Chart.js", "Mapbox"],
    github: "https://github.com/yourusername/weather-dashboard",
    liveDemo: "https://weather.demo.com",
  },
  {
    id: "5",
    title: "AI Chat Interface",
    description: "A modern chat interface for AI interactions with streaming responses, conversation history, and custom prompts.",
    image: "/images/projects/ai-chat.jpg",
    techStack: ["Next.js", "OpenAI API", "Tailwind CSS", "Vercel AI SDK"],
    github: "https://github.com/yourusername/ai-chat",
    liveDemo: "https://ai-chat.demo.com",
  },
  {
    id: "6",
    title: "Blog Platform",
    description: "A static blog platform with MDX support, syntax highlighting, and optimized SEO.",
    image: "/images/projects/blog.jpg",
    techStack: ["Next.js", "MDX", "Contentlayer", "Vercel"],
    github: "https://github.com/yourusername/blog",
    liveDemo: "https://blog.demo.com",
  },
];