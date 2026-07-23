"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { projectFilters, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

export function ProjectGallery({ projects }: { projects: Project[] }) {
  const [activeFilter, setActiveFilter] = React.useState<(typeof projectFilters)[number]>("All");

  const filteredProjects = React.useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.techStack.includes(activeFilter));
  }, [activeFilter, projects]);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2">
        {projectFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={cn(
              "rounded-full border border-border/70 px-4 py-2 text-sm font-semibold text-muted-foreground transition-all hover:border-primary/50 hover:text-foreground",
              activeFilter === filter && "border-primary/40 bg-primary/12 text-primary"
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-6 lg:grid-cols-2">
        {filteredProjects.map((project) => (
          <motion.article
            layout
            key={project.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 18 }}
          >
            <Card className="group h-full overflow-hidden">
              <div className="relative aspect-[16/9] overflow-hidden border-b border-border/70 bg-secondary">
                <Image
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                  fill
                  sizes="(min-width: 1024px) 620px, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                {project.featured ? (
                  <Badge className="absolute left-4 top-4 bg-background/80 text-foreground backdrop-blur">
                    Featured
                  </Badge>
                ) : null}
              </div>

              <CardContent className="flex h-full flex-col gap-5 p-6">
                <div>
                  <div className="mb-3 flex items-center justify-between gap-4 text-sm text-muted-foreground">
                    <span>{project.kicker}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>
                  <p className="mt-3 leading-7 text-muted-foreground">{project.description}</p>
                </div>

                <p className="rounded-md border border-border/70 bg-secondary/50 p-3 text-sm leading-6 text-muted-foreground">
                  {project.impact}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="mt-auto flex flex-col gap-3 sm:flex-row">
                  <Button variant="outline" asChild className="flex-1">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  {project.liveDemo ? (
                    <Button asChild className="flex-1">
                      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  ) : null}
                </div>
              </CardContent>
            </Card>
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
}
