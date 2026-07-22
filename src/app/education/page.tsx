import type { Metadata } from "next";
import Education from "@/components/sections/Education";

export const metadata: Metadata = {
  title: "Education - Portfolio",
  description: "My educational background and relevant coursework.",
};

export default function EducationPage() {
  return (
    <div className="py-24">
      <Education />
    </div>
  );
}
