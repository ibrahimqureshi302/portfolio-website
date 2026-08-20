import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { stats } from "@/data/portfolio";
import { useCountUp } from "@/hooks/useCountUp";
import profileImg from "@/assets/profile1.jpg";

const coreStack = [
  "Python",
  "Django",
  "Django REST Framework",
  "React",
  "TypeScript",
  "PostgreSQL",
  "MySQL",
  "Docker",
  "REST APIs",
  "Celery",
  "Redis",
  "WebSockets",
];

function StatCard({ value, suffix, label, delay }: { value: number; suffix?: string; label: string; delay: number }) {
  const { ref, value: animated } = useCountUp(value);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="glass rounded-2xl p-5 sm:p-6"
    >
      <p className="font-display text-3xl sm:text-4xl font-semibold text-ink">
        {animated}
        <span className="text-blue-soft">{suffix}</span>
      </p>
      <p className="mt-1.5 text-sm text-muted">{label}</p>
    </motion.div>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          path="/about"
          title="A developer who ships full features, not just endpoints."
          description="From database schema to the pixels on screen."
        />

        <div className="mt-14 grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto lg:mx-0 w-56 sm:w-64"
          >
            <div
              className="absolute -inset-3 rounded-[26px] opacity-40 blur-2xl"
              style={{ background: "linear-gradient(140deg, var(--color-cyan) 0%, var(--color-blue) 100%)" }}
              aria-hidden="true"
            />
            <div className="glass relative rounded-[22px] p-2.5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[16px]">
                <img
                  src={profileImg}
                  alt="Ibrahim Bilal working as a Full-Stack Web Developer"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="glass absolute -bottom-4 -right-4 rounded-xl px-3 py-2 font-mono text-[11px] text-mint shadow-lg">
              status: available
            </div>
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4 text-muted leading-relaxed"
            >
              <p>
                I'm a Full-Stack Web Developer who works primarily with{" "}
                <span className="text-ink">Python, Django and Django REST Framework</span> on the backend, and{" "}
                <span className="text-ink">React with TypeScript</span> on the front end. I care about building
                applications that are structured well underneath — clean models, sensible API contracts, and a
                database schema that won't fight you later.
              </p>
              <p>
                Data lives in <span className="text-ink">PostgreSQL</span> and{" "}
                <span className="text-ink">MySQL</span> depending on the project, and anything that shouldn't block a
                request — emails, notifications, scheduled cleanups — runs in the background through{" "}
                <span className="text-ink">Celery and Redis</span>, with cron jobs handling the recurring work.
              </p>
              <p>
                For real-time features, I reach for <span className="text-ink">WebSockets</span> so data updates on
                screen without a refresh. Every project I ship runs in <span className="text-ink">Docker</span>, so
                the environment that works on my machine is the same one that works in production.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 flex flex-wrap gap-2"
            >
              {coreStack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs px-3 py-1.5 rounded-full border border-line text-muted bg-surface/60"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <StatCard key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} delay={i * 0.08} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
