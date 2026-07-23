import Image from "next/image";
import { CheckCircle2, GraduationCap, Target } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { aboutContent, siteConfig } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="border-b border-foreground py-24 lg:py-32">
      <Container size="xl">
        <SectionHeading
          align="left"
          subtitle="[Part 01 / 05] About"
          title={aboutContent.title}
          description={aboutContent.summary}
        />

        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal className="relative">
            <div className="absolute -bottom-3 -right-3 h-full w-full rounded-lg border border-foreground bg-accent" aria-hidden="true" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-foreground bg-card shadow-[8px_8px_0_hsl(var(--foreground))]">
              <Image
                src="/image/gud_image.jpg"
                alt={`${siteConfig.fullName} portrait`}
                fill
                priority
                sizes="(min-width: 1024px) 480px, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div className="space-y-6">
            <Reveal>
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="space-y-5 p-6">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="h-5 w-5" />
                    <h3 className="text-xl font-black">Current Focus</h3>
                  </div>
                  {aboutContent.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="leading-8 text-primary-foreground/80">
                      {paragraph}
                    </p>
                  ))}
                </CardContent>
              </Card>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              <Reveal delay={0.08}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <Target className="mb-4 h-5 w-5 text-accent" />
                    <h3 className="mb-4 font-black">Principles</h3>
                    <ul className="space-y-3">
                      {aboutContent.principles.map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Reveal>

              <Reveal delay={0.16}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <Target className="mb-4 h-5 w-5 text-primary" />
                    <h3 className="mb-4 font-black">Career Goals</h3>
                    <ul className="space-y-3">
                      {aboutContent.goals.map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
