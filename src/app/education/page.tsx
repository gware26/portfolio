import type { Metadata } from "next";
import Certifications from "@/components/sections/Certifications";
import Education from "@/components/sections/Education";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Education & Certifications",
  description: `${siteConfig.fullName}'s Information Science education at Jimma University, programme accreditation, and verified certifications.`,
};

export default function EducationPage() {
  return (
    <>
      <Education />
      <Certifications />
    </>
  );
}
