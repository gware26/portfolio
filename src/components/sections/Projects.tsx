import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/projects";
import { ProjectGallery } from "./project-gallery";

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <Container size="xl">
        <Reveal>
          <SectionHeading
            align="left"
            title="Selected projects with product thinking behind the pixels."
            subtitle="Projects"
            description="A focused set of work that shows interface craft, data-aware thinking, validation, responsive design, and a practical full-stack learning path."
          />
        </Reveal>

        <ProjectGallery projects={projects} />
      </Container>
    </section>
  );
}
