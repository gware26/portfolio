import type { Metadata } from "next";
import Contact from "@/components/sections/Contact";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${siteConfig.fullName} about internships, graduate roles, freelance projects, and software engineering opportunities.`,
};

export default function ContactPage() {
  return <Contact />;
}
