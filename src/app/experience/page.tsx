import type { Metadata } from "next";
import Experience from "@/components/sections/Experience";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Experience",
  description: `${siteConfig.fullName}'s professional experience as a Website Developer building full-stack MERN applications.`,
};

export default function ExperiencePage() {
  return <Experience />;
}
