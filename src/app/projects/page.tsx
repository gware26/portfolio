import type { Metadata } from "next";
import Projects from "@/components/sections/Projects";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Projects",
  description: `Selected projects by ${siteConfig.fullName}, spanning full-stack MERN development, PHP/MySQL applications, and secure authentication.`,
};

export default function ProjectsPage() {
  return <Projects />;
}
