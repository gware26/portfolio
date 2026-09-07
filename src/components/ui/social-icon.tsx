import { Github, Linkedin, Mail, Send } from "lucide-react";

import type { SocialLink } from "@/data/social";

export function SocialIcon({ icon, className = "h-4 w-4" }: { icon: SocialLink["icon"]; className?: string }) {
  if (icon === "github") return <Github className={className} />;
  if (icon === "linkedin") return <Linkedin className={className} />;
  if (icon === "telegram") return <Send className={className} />;
  return <Mail className={className} />;
}
