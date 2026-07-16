import { BookOpen, CalendarDays, GraduationCap, MapPin } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { education } from "@/data/education";

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "long",
    timeZone: "UTC",
  }).format(new Date(`${date}-01T00:00:00.000Z`));
}

export default function Education() {
  return (
    <section id="education" className="border-b border-foreground py-24 lg:py-32">
      <Container size="xl">
        <Reveal>
          <SectionHeading
            align="left"
            title="Academic foundation with a software engineering direction."
            subtitle="[Part 05 / 05] Education"
            description="Information Science at Jimma University gives the broader systems context; personal engineering work turns that foundation into practical software."
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          {education.map((edu) => (
            <Reveal key={edu.id}>
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="mb-5 grid h-14 w-14 place-items-center rounded-md border border-foreground bg-primary text-primary-foreground">
                    <GraduationCap className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-black">{edu.degree}</h3>
                  <p className="mt-1 text-xl font-black text-primary">{edu.field}</p>
                  <div className="mt-5 space-y-3 text-sm text-muted-foreground">
                    <p className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-accent" />
                      {edu.institution}
                    </p>
                    <p className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-accent" />
                      {edu.location}
                    </p>
                    <p className="flex items-center gap-2">
                      <CalendarDays className="h-4 w-4 text-accent" />
                      {formatDate(edu.startDate)} - {edu.current ? `Expected ${formatDate(edu.endDate)}` : formatDate(edu.endDate)}
                    </p>
                  </div>
                  {edu.description ? (
                    <p className="mt-6 leading-7 text-muted-foreground">{edu.description}</p>
                  ) : null}
                </CardContent>
              </Card>
            </Reveal>
          ))}

          <Reveal delay={0.08}>
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="mb-4 text-xl font-black">Relevant Coursework</h3>
                <div className="mb-8 flex flex-wrap gap-2">
                  {education[0]?.coursework.map((course) => (
                    <Badge key={course} variant="outline">{course}</Badge>
                  ))}
                </div>

                <h3 className="mb-4 text-xl font-black">Highlights</h3>
                <ul className="space-y-3">
                  {education[0]?.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
