export interface SocialLink {
  name: string;
  url: string;
  icon: "github" | "linkedin" | "mail";
  ariaLabel: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: "github",
    ariaLabel: "Open GitHub profile",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    icon: "linkedin",
    ariaLabel: "Open LinkedIn profile",
  },
  {
    name: "Email",
    url: "mailto:your.email@example.com",
    icon: "mail",
    ariaLabel: "Send an email",
  },
];

export const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Education", href: "/education" },
  { name: "Contact", href: "/contact" },
] as const;
