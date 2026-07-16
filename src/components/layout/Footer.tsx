"use client";

import Link from "next/link";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

import { LogoMark } from "@/components/layout/logo-mark";
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
    <footer className="border-t border-foreground bg-background">
      <Container size="xl" className="py-14">
        <div className="mb-12 grid gap-6 rounded-lg border border-foreground bg-primary p-6 shadow-[6px_6px_0_hsl(var(--foreground))] lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="font-mono text-sm font-bold uppercase text-primary-foreground">[Next step]</p>
            <h2 className="mt-3 max-w-3xl text-4xl font-black leading-none text-primary-foreground sm:text-5xl">
              Have a useful web product to build?
            </h2>
          </div>
          <Button variant="outline" size="lg" asChild>
            <a href={`mailto:${siteConfig.email}`}>
              <Mail className="h-4 w-4" />
              Email Gudina
            </a>
          </Button>
        </div>

        <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr_0.7fr_0.5fr]">
          <div className="max-w-md space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <LogoMark label={siteConfig.initials} />
              <span className="font-black uppercase">{siteConfig.fullName}</span>
            </Link>
            <p className="text-sm leading-7 text-muted-foreground">{siteConfig.tagline}</p>
          </div>

          <div>
            <h2 className="mb-4 font-mono text-sm font-bold uppercase text-primary">Navigation</h2>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 font-mono text-sm font-bold uppercase text-primary">Connect</h2>
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
