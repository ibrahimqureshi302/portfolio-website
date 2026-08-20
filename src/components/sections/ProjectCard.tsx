import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Maximize2, Check } from "lucide-react";
import type { Project } from "@/types";
import { ProjectThumbnail } from "@/components/ui/ProjectThumbnail";
import { Modal } from "@/components/ui/Modal";
import { GithubIcon } from "@/components/ui/BrandIcons";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: (index % 3) * 0.08 }}
        whileHover={{ y: -6 }}
        className="glass group flex flex-col overflow-hidden rounded-2xl"
      >
        <button
          onClick={() => setOpen(true)}
          className="relative block text-left"
          aria-label={`View details for ${project.name}`}
        >
          <div className="overflow-hidden">
            <div className="transition-transform duration-500 group-hover:scale-[1.04]">
              <ProjectThumbnail
                gradient={project.gradient}
                glyph={project.glyph}
                screenshot={project.screenshot}
                screenshotAlt={`${project.name} interface screenshot`}
              />
            </div>
          </div>
          <span className="glass absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
            <Maximize2 size={13} className="text-ink" />
          </span>
        </button>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-xl font-semibold text-ink">{project.name}</h3>
          <p className="font-mono text-xs text-blue-soft mt-1">{project.tagline}</p>
          <p className="mt-3 text-sm text-muted leading-relaxed flex-1">{project.description}</p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <span key={tech} className="font-mono text-[10px] px-2 py-1 rounded-md border border-line text-faint">
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-medium text-ink hover:border-blue-soft/60 transition-colors"
            >
              <GithubIcon size={13} /> Code
            </a>
            {/* <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-medium text-white transition-transform hover:-translate-y-0.5"
              style={{ backgroundImage: "linear-gradient(100deg, var(--color-blue) 0%, var(--color-violet) 100%)" }}
            >
              <ExternalLink size={13} /> Live Demo
            </a> */}
            <button
              onClick={() => setOpen(true)}
              className="ml-auto text-xs font-mono text-muted hover:text-ink transition-colors"
            >
              Details →
            </button>
          </div>
        </div>
      </motion.article>

      <Modal open={open} onClose={() => setOpen(false)} labelledBy={`project-${project.slug}-title`}>
        <p className="font-mono text-xs text-blue-soft mb-2">/projects/{project.slug}</p>
        <h3 id={`project-${project.slug}-title`} className="font-display text-2xl font-semibold text-ink">
          {project.name}
        </h3>

        {project.screenshot && (
          <div className="mt-4 rounded-xl overflow-hidden border border-line">
            <img
              src={project.screenshot}
              alt={`${project.name} interface screenshot`}
              className="w-full h-auto object-cover object-top"
              loading="lazy"
            />
          </div>
        )}

        <p className="mt-4 text-sm text-muted leading-relaxed">{project.longDescription}</p>

        <div className="mt-5">
          <p className="font-mono text-[11px] text-faint uppercase tracking-wide mb-2.5">Key features</p>
          <ul className="space-y-2">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-ink/90">
                <Check size={14} className="text-mint mt-0.5 shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span key={tech} className="font-mono text-[10px] px-2 py-1 rounded-md border border-line text-muted">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass flex items-center gap-1.5 rounded-lg px-4 py-2.5 text-xs font-medium text-ink hover:border-blue-soft/60 transition-colors"
          >
            <GithubIcon size={14} /> View Code
          </a>
          {/* <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-lg px-4 py-2.5 text-xs font-medium text-white"
            style={{ backgroundImage: "linear-gradient(100deg, var(--color-blue) 0%, var(--color-violet) 100%)" }}
          >
            <ExternalLink size={14} /> Live Demo
          </a> */}
        </div>
      </Modal>
    </>
  );
}
