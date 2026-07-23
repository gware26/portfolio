"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
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
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="absolute inset-0 grid-mask opacity-50" />
      <motion.div
        aria-hidden="true"
        className="absolute left-[8%] top-32 h-24 w-24 rounded-lg border border-primary/20 bg-primary/10 blur-[1px]"
        animate={{ y: [0, 18, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute bottom-24 right-[10%] h-32 w-32 rounded-full border border-accent/20 bg-accent/10"
        animate={{ y: [0, -20, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container size="xl" className="relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.09 } },
          }}
          className="max-w-5xl"
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}>
            <Badge variant="outline" className="mb-6">
              {siteConfig.availability}
            </Badge>
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } }}
            className="text-balance text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl"
          >
            {siteConfig.name}
            <span className="block text-gradient">{siteConfig.title}</span>
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } }}
            className="mt-8 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl"
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
        </motion.div>

        <div className="mt-16 grid gap-3 sm:grid-cols-3">
          {siteConfig.heroMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 + index * 0.08 }}
              className="rounded-lg border border-border/70 bg-card/60 p-5 backdrop-blur"
            >
              <p className="text-2xl font-bold">{metric.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </Container>

      <Link
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-muted-foreground transition-colors hover:text-foreground md:block"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="h-6 w-6 animate-bounce" />
      </Link>
    </section>
  );
}
