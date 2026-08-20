import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillGroups } from "@/data/portfolio";
import type { SkillGroup } from "@/types";

const accentVar: Record<SkillGroup["accent"], string> = {
  blue: "var(--color-blue)",
  cyan: "var(--color-cyan)",
  violet: "var(--color-violet)",
  mint: "var(--color-mint)",
};

const accentText: Record<SkillGroup["accent"], string> = {
  blue: "text-blue-soft",
  cyan: "text-cyan",
  violet: "text-violet",
  mint: "text-mint",
};

function SkillGroupCard({ group, index }: { group: SkillGroup; index: number }) {
  const accent = accentVar[group.accent];
  const Icon = group.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: (index % 2) * 0.08 }}
      whileHover={{ y: -4 }}
      className="glass group relative rounded-2xl p-6 sm:p-7 overflow-hidden"
    >
      <div
        className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500"
        style={{ background: accent }}
        aria-hidden="true"
      />

      <div className="relative flex items-start gap-4 mb-6">
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
          style={{ background: `color-mix(in srgb, ${accent} 14%, transparent)` }}
        >
          <Icon size={20} style={{ color: accent }} />
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold text-ink">{group.title}</h3>
          <p className="text-sm text-muted mt-0.5">{group.description}</p>
        </div>
      </div>

      <ul className="relative space-y-3.5">
        {group.skills.map((skill, i) => (
          <li key={skill.name}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-sm text-ink/90">{skill.name}</span>
              <span className={`font-mono text-[11px] ${accentText[group.accent]}`}>{skill.level}%</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-line-soft overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.15 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="h-full rounded-full"
                style={{ background: `linear-gradient(90deg, ${accent}, color-mix(in srgb, ${accent} 40%, white))` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          path="/skills"
          title="The stack I build with, end to end."
          description="Grouped by where each tool sits in the request lifecycle — from database to browser."
        />

        <div className="mt-14 grid sm:grid-cols-2 gap-6">
          {skillGroups.map((group, i) => (
            <SkillGroupCard key={group.title} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
