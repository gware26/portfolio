import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { experience } from "@/data/experience";

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    timeZone: "UTC",
  }).format(new Date(`${date}-01T00:00:00.000Z`));
}

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <Container size="xl">
        <Reveal>
          <SectionHeading
            align="left"
            title="Experience built through study, projects, and public practice."
            subtitle="Experience"
            description="Early-career experience does not have to be inflated. This timeline shows the real trajectory: learning deeply, shipping projects, and building professional habits."
          />
        </Reveal>

        <div className="relative space-y-6 before:absolute before:left-4 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-border md:before:left-1/2">
          {experience.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.04}>
              <div className="relative grid gap-6 md:grid-cols-2">
                <div className={index % 2 === 0 ? "md:pr-10" : "md:col-start-2 md:pl-10"}>
                  <span className="absolute left-2 top-7 z-10 h-5 w-5 rounded-full border-4 border-background bg-primary md:left-1/2 md:-translate-x-1/2" />
                  <Card>
                    <CardContent className="p-6">
                      <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <h3 className="text-xl font-semibold">{item.title}</h3>
                          <p className="text-muted-foreground">{item.company} - {item.location}</p>
                        </div>
                        <Badge variant="outline">{item.type}</Badge>
                      </div>

                      <p className="mb-5 text-sm font-medium text-primary">
                        {formatDate(item.startDate)} - {item.current ? "Present" : item.endDate ? formatDate(item.endDate) : "Present"}
                      </p>

                      <ul className="space-y-3">
                        {item.description.map((desc) => (
                          <li key={desc} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                            {desc}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {item.technologies.map((tech) => (
                          <Badge key={tech} variant="outline">{tech}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
