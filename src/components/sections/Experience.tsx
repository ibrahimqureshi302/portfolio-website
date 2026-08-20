import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          path="/experience"
          title="Where I've worked."
          description="A short but hands-on path through full-stack development."
        />

        <div className="mt-16 relative">
          <div className="absolute left-[9px] top-2 bottom-2 w-px bg-line" aria-hidden="true" />

          <ul className="space-y-12">
            {experience.map((exp, i) => (
              <motion.li
                key={exp.role + exp.period}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative pl-10"
              >
                <span
                  className="absolute left-0 top-1.5 flex h-5 w-5 items-center justify-center rounded-full glass"
                  aria-hidden="true"
                >
                  <span
                    className={`h-2 w-2 rounded-full ${exp.current ? "bg-mint" : "bg-blue"}`}
                    style={exp.current ? { boxShadow: "0 0 0 4px color-mix(in srgb, var(--color-mint) 20%, transparent)" } : undefined}
                  />
                </span>

                <div className="glass rounded-2xl p-6">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                    <h3 className="font-display text-lg font-semibold text-ink">{exp.role}</h3>
                    <span className="font-mono text-xs text-blue-soft">{exp.period}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-muted mb-4">
                    <span>{exp.organization}</span>
                    <span className="flex items-center gap-1 text-faint">
                      <MapPin size={12} /> {exp.location}
                    </span>
                    {exp.current && (
                      <span className="font-mono text-[10px] px-2 py-0.5 rounded-full text-mint border border-mint/30">
                        current
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted leading-relaxed">{exp.summary}</p>
                  <ul className="mt-4 space-y-1.5">
                    {exp.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-ink/85">
                        <span className="mt-1.5 h-1 w-1 rounded-full bg-cyan shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
