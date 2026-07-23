export const siteConfig = {
  name: "Gudina",
  fullName: "Gudina",
  initials: "G",
  title: "Information Science Student & Software Engineer",
  tagline:
    "I design and build fast, accessible web products with a focus on clarity, strong systems, and thoughtful interaction.",
  description:
    "A dark-first portfolio for Gudina, an Information Science student at Jimma University focused on software engineering, full-stack web development, and practical product craft.",
  location: "Jimma, Ethiopia",
  university: "Jimma University",
  email: "your.email@example.com",
  resumeUrl: "/resume.pdf",
  url: "https://yourdomain.com",
  availability: "Open to internships, graduate roles, freelance work, and software engineering opportunities.",
  heroMetrics: [
    { label: "Projects shipped", value: "12+" },
    { label: "Core focus", value: "Full-stack" },
    { label: "Graduation", value: "2026" },
  ],
} as const;

export const aboutContent = {
  eyebrow: "About",
  title: "A builder shaped by curiosity, discipline, and product thinking.",
  summary:
    "I am an Information Science student at Jimma University who cares about building software that feels precise, useful, and reliable. My current focus is modern web engineering with React, Next.js, TypeScript, databases, and the habits that make teams move faster.",
  paragraphs: [
    "My learning journey started with small interfaces and experiments, then grew into full-stack projects where product decisions, data models, accessibility, and performance all mattered at the same time.",
    "I am working toward becoming the kind of engineer who can own a feature end to end: understand the user, shape the experience, build the system, test the edge cases, and communicate the tradeoffs clearly.",
  ],
  principles: [
    "Design interfaces that are calm, fast, and easy to scan.",
    "Prefer simple systems with strong boundaries over clever code.",
    "Learn in public by building practical tools and documenting decisions.",
  ],
  goals: [
    "Join an engineering team where I can learn from strong product builders.",
    "Contribute to open-source projects that improve developer experience.",
    "Build polished software for real users, not just demos.",
  ],
} as const;

export const contactContent = {
  title: "Let us build something useful.",
  description:
    "Send a project idea, role opportunity, collaboration note, or feedback. I usually respond with context, next steps, and a few clarifying questions.",
  responseTime: "Usually responds within 24-48 hours",
} as const;
