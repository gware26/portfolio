export interface SocialLink {
  name: string;
  url: string;
  icon: "github" | "linkedin" | "mail";
  ariaLabel: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/gware26",
    icon: "github",
    ariaLabel: "Open GitHub profile",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/gudina-ware-87a731339",
    icon: "linkedin",
    ariaLabel: "Open LinkedIn profile",
  },
  {
    name: "Email",
    url: "mailto:gudinaware2622@gmail.com",
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
