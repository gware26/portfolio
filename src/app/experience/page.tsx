import type { Metadata } from "next";
import Experience from "@/components/sections/Experience";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Experience",
  description: `${siteConfig.fullName}'s study, project, open-source, and certification experience.`,
};

export default function ExperiencePage() {
  return <Experience />;
}
