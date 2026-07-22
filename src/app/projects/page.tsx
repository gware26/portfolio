import type { Metadata } from "next";
import Projects from "@/components/sections/Projects";

export const metadata: Metadata = {
  title: "Projects - Portfolio",
  description: "A selection of projects that showcase my skills and experience.",
};

export default function ProjectsPage() {
  return (
    <div className="py-24">
      <Projects />
    </div>
  );
}
