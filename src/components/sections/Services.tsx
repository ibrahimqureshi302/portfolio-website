import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/data/portfolio";

export function Services() {
  return (
    <section id="services" className="relative py-28 sm:py-36 bg-surface/30">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          path="/services"
          title="How I can help."
          description="From a single API to a fully deployed, containerized product."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass group rounded-2xl p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[color-mix(in_srgb,var(--color-blue)_14%,transparent)] mb-5 group-hover:bg-[color-mix(in_srgb,var(--color-blue)_22%,transparent)] transition-colors">
                  <Icon size={19} className="text-blue-soft" />
                </div>
                <h3 className="font-display text-base font-semibold text-ink mb-2">{service.title}</h3>
                <p className="text-sm text-muted leading-relaxed mb-4">{service.description}</p>
                <ul className="space-y-1.5">
                  {service.deliverables.map((d) => (
                    <li key={d} className="flex items-center gap-2 font-mono text-[11px] text-faint">
                      <span className="h-1 w-1 rounded-full bg-cyan shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
