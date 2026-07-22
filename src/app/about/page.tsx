import type { Metadata } from "next";
import About from "@/components/sections/About";

export const metadata: Metadata = {
  title: "About - Portfolio",
  description: "Get to know me better - my background, passions, and what drives me as a developer.",
};

export default function AboutPage() {
  return (
    <div className="py-24">
      <About />
    </div>
  );
}
