import type { Metadata } from "next";
import Experience from "@/components/sections/Experience";

export const metadata: Metadata = {
  title: "Experience - Portfolio",
  description: "My professional journey, education, and achievements.",
};

export default function ExperiencePage() {
  return (
    <div className="py-24">
      <Experience />
    </div>
  );
}
