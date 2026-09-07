import type { Metadata } from "next";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${siteConfig.fullName}, an Information Scientist & Software Developer building full-stack MERN and PHP/MySQL applications.`,
};

export default function AboutPage() {
  return (
    <>
      <About />
      <Skills />
    </>
  );
}
