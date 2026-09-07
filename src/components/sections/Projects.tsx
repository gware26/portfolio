import { Github } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/projects";
import { socialLinks } from "@/data/social";
import { ProjectGallery } from "./project-gallery";

export default function Projects() {
  const github = socialLinks.find((link) => link.icon === "github");

  return (
    <section id="projects" className="border-b border-foreground py-24 lg:py-32">
      <Container size="xl">
        <Reveal>
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              align="left"
              className="mb-0"
              title="Selected projects with product thinking behind the pixels."
              subtitle="[Part 03 / 06] Projects"
              description="A focused set of work that shows full-stack MERN and PHP/MySQL craft, secure authentication, and practical product thinking."
            />
            {github ? (
              <Button variant="outline" asChild>
                <a href={github.url} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  View GitHub profile
                </a>
              </Button>
            ) : null}
          </div>
        </Reveal>

        <ProjectGallery projects={projects} />
      </Container>
    </section>
  );
}
