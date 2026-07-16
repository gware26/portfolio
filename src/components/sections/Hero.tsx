"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail, Send } from "lucide-react";

import { LogoMark } from "@/components/layout/logo-mark";
import { LogoMarquee } from "@/components/sections/logo-marquee";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/data/site";
import { socialLinks, type SocialLink } from "@/data/social";

function SocialIcon({ icon }: { icon: SocialLink["icon"] }) {
  const className = "h-4 w-4";

  if (icon === "github") return <Github className={className} />;
  if (icon === "linkedin") return <Linkedin className={className} />;
  return <Mail className={className} />;
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-foreground pb-10 pt-28">
      <Container size="xl" className="relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.09 } },
          }}
          className="grid min-h-[calc(100vh-9rem)] gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center"
        >
          <div>
            <motion.div
              variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}
              className="flex max-w-2xl items-center gap-4"
            >
              <LogoMark label={siteConfig.initials} size="lg" />
              <p className="font-mono text-sm font-bold uppercase text-primary">
                [Available]
                <span className="mt-1 block font-sans text-sm normal-case leading-6 text-muted-foreground">
                  {siteConfig.availability}
                </span>
              </p>
            </motion.div>

            <motion.h1
              variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } }}
              className="mt-8 text-balance text-6xl font-black leading-[0.86] sm:text-8xl lg:text-6xl"
            >
              {siteConfig.name}
              <span className="block">builds useful</span>
              <span className="block text-gradient">web products.</span>
            </motion.h1>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } }}
              className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl"
            >
              {siteConfig.tagline}
            </motion.p>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } }}
              className="mt-10 flex flex-col gap-3 sm:flex-row"
            >
              <Button size="lg" asChild>
                <Link href="/contact">
                  <Send className="h-4 w-4" />
                  Contact me
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={siteConfig.resumeUrl} target="_blank" rel="noopener noreferrer">
                  <Download className="h-4 w-4" />
                  Resume
                </a>
              </Button>
            </motion.div>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              {socialLinks.map((link) => (
                <Button key={link.name} variant="outline" size="icon" asChild>
                  <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.ariaLabel}>
                    <SocialIcon icon={link.icon} />
                  </a>
                </Button>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
            className="relative mx-auto w-full max-w-lg lg:max-w-none"
          >
            <div className="absolute -right-3 top-3 h-full w-full rounded-lg border border-foreground bg-primary" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-lg border border-foreground bg-card shadow-[8px_8px_0_hsl(var(--foreground))]">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/image/gud_image.jpg"
                  alt={`${siteConfig.fullName} portrait`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 520px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="grid border-t border-foreground bg-card sm:grid-cols-3">
                {siteConfig.heroMetrics.map((metric) => (
                  <div key={metric.label} className="border-b border-foreground p-4 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
                    <p className="text-2xl font-black">{metric.value}</p>
                    <p className="mt-1 text-xs font-bold uppercase leading-5 text-muted-foreground">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        <LogoMarquee />
      </Container>

      <Link
        href="#about"
        className="absolute bottom-6 right-8 hidden rounded-full border border-foreground bg-card p-3 text-foreground shadow-[3px_3px_0_hsl(var(--foreground))] transition-transform hover:-translate-y-0.5 md:block"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="h-5 w-5" />
      </Link>
    </section>
  );
}
