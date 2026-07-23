import type { Metadata } from "next";
import Education from "@/components/sections/Education";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Education",
  description: `${siteConfig.fullName}'s Information Science education at Jimma University and relevant coursework.`,
};

export default function EducationPage() {
  return <Education />;
}
