import { Database, LayoutDashboard, Server, Users, Wrench } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { skills, type SkillCategory } from "@/data/skills";

function CategoryIcon({ icon }: { icon: SkillCategory["icon"] }) {
  const className = "h-5 w-5";

  if (icon === "layout") return <LayoutDashboard className={className} />;
  if (icon === "server") return <Server className={className} />;
  if (icon === "database") return <Database className={className} />;
  if (icon === "users") return <Users className={className} />;
  return <Wrench className={className} />;
}

export default function Skills() {
  return (
    <section id="skills" className="border-y border-border/60 bg-secondary/25 py-24">
      <Container size="xl">
        <Reveal>
          <SectionHeading
            align="left"
            title="A practical toolkit for building polished web products."
            subtitle="Skills"
            description="The stack is intentionally focused: strong frontend fundamentals, useful backend patterns, database literacy, and collaboration habits that matter on real teams."
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((category, categoryIndex) => (
            <Reveal key={category.name} delay={categoryIndex * 0.04}>
              <Card className="group h-full transition-transform duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="mb-5 flex items-start gap-4">
                    <div className="grid h-11 w-11 place-items-center rounded-md border border-primary/20 bg-primary/10 text-primary">
                      <CategoryIcon icon={category.icon} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{category.name}</h3>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">{category.description}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="rounded-md border border-border/60 bg-background/45 p-3 transition-colors group-hover:border-border"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex min-w-0 items-center gap-3">
                            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-secondary text-[10px] font-bold text-muted-foreground">
                              {skill.icon}
                            </span>
                            <div className="min-w-0">
                              <p className="font-semibold">{skill.name}</p>
                              <p className="truncate text-xs text-muted-foreground">{skill.detail}</p>
                            </div>
                          </div>
                          <Badge variant={skill.level === "Advanced" || skill.level === "Expert" ? "default" : "outline"}>
                            {skill.level}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
