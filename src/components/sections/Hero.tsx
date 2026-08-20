import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { profile, socials, heroBadge } from "@/data/portfolio";
import { Button } from "@/components/ui/Button";
import { GlowField } from "@/components/ui/GlowField";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import profileImg from "@/assets/profile.jpg";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const github = socials.find((s) => s.label === "GitHub");
const linkedin = socials.find((s) => s.label === "LinkedIn");

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20">
      <GlowField variant="hero" />
      <div className="grid-fade absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl w-full px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 font-mono text-xs px-3 py-1.5 rounded-full glass mb-8"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-mint" />
            </span>
            <span className="text-muted">{heroBadge.label}</span>
          </motion.div>

          <motion.p variants={item} className="font-mono text-sm text-blue-soft mb-4 tracking-wide">
            Hi, I'm
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-5xl sm:text-6xl xl:text-7xl font-semibold tracking-tight text-ink leading-[1.05]"
          >
            {profile.name}
          </motion.h1>

          <motion.p variants={item} className="font-mono text-lg sm:text-xl text-gradient mt-4 font-medium">
            {profile.title}
          </motion.p>

          <motion.p variants={item} className="mt-6 text-base sm:text-lg text-muted leading-relaxed max-w-lg">
            {profile.description}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <Button
              as="a"
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              icon={<ArrowRight size={16} />}
            >
              View My Work
            </Button>
            <Button
              as="a"
              href="#contact"
              variant="secondary"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact Me
            </Button>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex items-center gap-4">
            {github && (
              <a
                href={github.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="glass flex h-10 w-10 items-center justify-center rounded-full text-muted hover:text-ink hover:border-blue-soft/60 transition-colors"
              >
                <GithubIcon size={17} />
              </a>
            )}
            {linkedin && (
              <a
                href={linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="glass flex h-10 w-10 items-center justify-center rounded-full text-muted hover:text-ink hover:border-blue-soft/60 transition-colors"
              >
                <LinkedinIcon size={17} />
              </a>
            )}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div className="relative aspect-[4/5] w-full">
            <div
              className="absolute -inset-3 rounded-[28px] opacity-60 blur-2xl"
              style={{ background: "linear-gradient(140deg, var(--color-blue) 0%, var(--color-violet) 100%)" }}
              aria-hidden="true"
            />
            <div className="glass relative h-full w-full rounded-[24px] p-3 shadow-2xl">
              <div className="relative h-full w-full overflow-hidden rounded-[18px]">
                <img
                  src={profileImg}
                  alt="Portrait of Ibrahim Bilal, Full-Stack Web Developer"
                  className="h-full w-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(180deg, transparent 60%, rgba(10,11,15,0.55) 100%)" }}
                />
              </div>

              {/* corner bracket marks — signature JSON motif */}
              <span className="absolute top-5 left-5 font-mono text-cyan text-lg select-none" aria-hidden="true">
                {"{"}
              </span>
              <span className="absolute bottom-5 right-5 font-mono text-cyan text-lg select-none" aria-hidden="true">
                {"}"}
              </span>
            </div>

            <motion.div
              initial={{ opacity: 0, x: -16, y: -8 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="glass absolute -left-6 top-8 hidden sm:flex items-center gap-2 rounded-xl px-3.5 py-2.5 shadow-lg"
            >
              <span className="h-2 w-2 rounded-full bg-blue" />
              <span className="font-mono text-xs text-ink">Django REST</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 16, y: 8 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1.05, duration: 0.6 }}
              className="glass absolute -right-4 bottom-10 hidden sm:flex items-center gap-2 rounded-xl px-3.5 py-2.5 shadow-lg"
            >
              <span className="h-2 w-2 rounded-full bg-cyan" />
              <span className="font-mono text-xs text-ink">React + TS</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-faint hover:text-muted transition-colors"
        aria-label="Scroll to About section"
      >
        <span className="font-mono text-[10px] tracking-widest uppercase">Scroll</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>
          <ArrowDown size={14} />
        </motion.span>
      </motion.button>
    </section>
  );
}
