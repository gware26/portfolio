import type { Metadata } from "next";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${siteConfig.fullName}, an Information Science student at Jimma University focused on software engineering.`,
};

export default function AboutPage() {
  return (
    <>
      <About />
      <Skills />
    </>
  );
}
