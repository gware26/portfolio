"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, ChevronDown, ExternalLink, FolderGit2, Github } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { projectFilters, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

function ProjectDetails({ project, open }: { project: Project; open: boolean }) {
  return (
    <AnimatePresence initial={false}>
      {open ? (
        <motion.div
          id={`${project.id}-details`}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <div className="space-y-5 rounded-md border border-foreground bg-secondary p-4">
            {project.problem ? (
              <div>
                <p className="mb-2 font-mono text-xs font-bold uppercase text-primary">Problem</p>
                <p className="text-sm leading-6 text-muted-foreground">{project.problem}</p>
              </div>
            ) : null}
            {project.features?.length ? (
              <div>
                <p className="mb-2 font-mono text-xs font-bold uppercase text-primary">Key features</p>
                <ul className="space-y-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex gap-2 text-sm leading-6 text-muted-foreground">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = React.useState(false);
  const hasDetails = Boolean(project.problem || project.features?.length);
  const hasLinks = Boolean(project.github || project.liveDemo);

  return (
    <Card className="group flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[16/9] shrink-0 overflow-hidden border-b border-foreground bg-secondary">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            sizes="(min-width: 1024px) 620px, 100vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="grid h-full w-full place-items-center bg-card">
            <FolderGit2 className="h-10 w-10 text-muted-foreground" aria-hidden="true" />
          </div>
        )}
        {project.featured ? <Badge className="absolute left-4 top-4">Featured</Badge> : null}
      </div>

      <CardContent className="flex flex-1 flex-col gap-5 p-6">
        <div>
          <div className="mb-3 flex items-center justify-between gap-4 text-sm text-muted-foreground">
            <span className="font-mono font-bold uppercase">{project.kicker}</span>
            {project.year ? <span className="font-mono font-bold">{project.year}</span> : null}
          </div>
          <h3 className="text-2xl font-black">{project.title}</h3>
          <p className="mt-3 leading-7 text-muted-foreground">{project.description}</p>
        </div>

        <p className="rounded-md border border-foreground bg-primary/20 p-3 text-sm font-semibold leading-6 text-foreground">
          {project.impact}
        </p>

        {hasDetails ? (
          <div className="space-y-3">
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls={`${project.id}-details`}
              className="inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-foreground"
            >
              {open ? "Hide details" : "Problem & key features"}
              <ChevronDown className={cn("h-4 w-4 transition-transform duration-300", open && "rotate-180")} />
            </button>
            <ProjectDetails project={project} open={open} />
          </div>
        ) : null}

        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>

        {hasLinks ? (
          <div className="mt-auto flex flex-col gap-3 sm:flex-row">
            {project.github ? (
              <Button variant="outline" asChild className="flex-1">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  Code
                </a>
              </Button>
            ) : null}
            {project.liveDemo ? (
              <Button asChild className="flex-1">
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  Live demo
                </a>
              </Button>
            ) : null}
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}

export function ProjectGallery({ projects }: { projects: Project[] }) {
  const [activeFilter, setActiveFilter] = React.useState<(typeof projectFilters)[number]>("All");

  const filteredProjects = React.useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.techStack.includes(activeFilter));
  }, [activeFilter, projects]);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by technology">
        {projectFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            aria-pressed={activeFilter === filter}
            className={cn(
              "rounded-md border border-foreground bg-card px-4 py-2 text-sm font-bold text-foreground transition-all hover:bg-secondary",
              activeFilter === filter && "bg-primary text-primary-foreground shadow-[3px_3px_0_hsl(var(--foreground))]"
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
            <ProjectCard project={project} />
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
}