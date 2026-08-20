import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/portfolio";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="relative py-28 sm:py-36 bg-surface/30">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          path="/projects"
          title="Selected work."
          description="A few full-stack builds — each pairing a Django REST API with a React front end."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
