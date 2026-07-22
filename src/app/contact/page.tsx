import type { Metadata } from "next";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact - Portfolio",
  description: "Have a project in mind? Let's work together to build something amazing.",
};

export default function ContactPage() {
  return (
    <div className="py-24">
      <Contact />
    </div>
  );
}
