import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { education } from "@/data/portfolio";

export function Education() {
  return (
    <section id="education" className="relative py-28 sm:py-36 bg-surface/30">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading path="/education" title="Academic background." />

        <div className="mt-14 space-y-5">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="glass rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row gap-5 sm:items-center"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[color-mix(in_srgb,var(--color-violet)_16%,transparent)]">
                <GraduationCap size={22} className="text-violet" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold text-ink">{edu.degree}</h3>
                  <span className="font-mono text-xs text-blue-soft">{edu.period}</span>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-sm text-muted mt-1">
                  <span>{edu.institution}</span>
                  <span className="flex items-center gap-1 text-faint">
                    <MapPin size={12} /> {edu.location}
                  </span>
                </div>
                <p className="mt-2.5 text-sm text-muted leading-relaxed">{edu.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
