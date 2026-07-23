"use client";

import Link from "next/link";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/data/site";
import { navigation, socialLinks, type SocialLink } from "@/data/social";

function SocialIcon({ icon }: { icon: SocialLink["icon"] }) {
  const className = "h-4 w-4";

  if (icon === "github") return <Github className={className} />;
  if (icon === "linkedin") return <Linkedin className={className} />;
  return <Mail className={className} />;
}

export default function Footer() {
  return (
    <footer className="border-t border-border/70 bg-background/70">
      <Container size="xl" className="py-12">
        <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr_0.7fr_0.5fr]">
          <div className="max-w-md space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-md border border-border/80 bg-card text-sm font-bold text-gradient">
                {siteConfig.initials}
              </span>
              <span className="font-semibold">{siteConfig.fullName}</span>
            </Link>
            <p className="text-sm leading-7 text-muted-foreground">{siteConfig.tagline}</p>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold">Navigation</h2>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold">Connect</h2>
            <div className="flex gap-2">
              {socialLinks.map((link) => (
                <Button key={link.name} variant="outline" size="icon" asChild>
                  <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.ariaLabel}>
                    <SocialIcon icon={link.icon} />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          <div className="md:text-right">
            <Button
              variant="outline"
              size="icon"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} {siteConfig.fullName}. All rights reserved.</p>
          <p>Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.</p>
        </div>
      </Container>
    </footer>
  );
}
