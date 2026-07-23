import type { Metadata } from "next";
import Projects from "@/components/sections/Projects";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Projects",
  description: `Selected projects by ${siteConfig.fullName}, built with Next.js, React, TypeScript, and modern web tooling.`,
};

export default function ProjectsPage() {
  return <Projects />;
}
