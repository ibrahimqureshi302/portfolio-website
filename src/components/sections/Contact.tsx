import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowField } from "@/components/ui/GlowField";
import { Button } from "@/components/ui/Button";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { profile, socials } from "@/data/portfolio";

type Status = "idle" | "submitting" | "success" | "error";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const emptyForm: FormState = { name: "", email: "", subject: "", message: "" };

const fields: { key: keyof FormState; label: string; type: string; full?: boolean }[] = [
  { key: "name", label: "Name", type: "text" },
  { key: "email", label: "Email", type: "email" },
  { key: "subject", label: "Subject", type: "text", full: true },
];

export function Contact() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [status, setStatus] = useState<Status>("idle");

  const isValid = form.name.trim() && /\S+@\S+\.\S+/.test(form.email) && form.subject.trim() && form.message.trim();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isValid) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    // NOTE: no backend is wired up yet. Connect this to your API, or a
    // service like Formspree / EmailJS, then replace this simulated delay.
    window.setTimeout(() => {
      setStatus("success");
      setForm(emptyForm);
      window.setTimeout(() => setStatus("idle"), 4000);
    }, 900);
  };

  const github = socials.find((s) => s.label === "GitHub");
  const linkedin = socials.find((s) => s.label === "LinkedIn");

  return (
    <section id="contact" className="relative py-28 sm:py-36 overflow-hidden">
      <GlowField variant="subtle" />
      <div className="relative mx-auto max-w-5xl px-6">
        <SectionHeading
          path="/contact"
          title="Let's build something."
          description="Have a project in mind, or just want to talk shop? My inbox is open."
          align="center"
        />

        <div className="mt-14 grid lg:grid-cols-[0.8fr_1.2fr] gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="glass rounded-2xl p-6 sm:p-7 flex flex-col gap-5"
          >
            <div>
              <p className="font-mono text-[11px] text-faint uppercase tracking-wide mb-3">Reach me directly</p>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 text-sm text-ink hover:text-blue-soft transition-colors"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg glass shrink-0">
                  <Mail size={15} />
                </span>
                {profile.email}
              </a>
            </div>

            <div className="h-px bg-line-soft" />

            <div>
              <p className="font-mono text-[11px] text-faint uppercase tracking-wide mb-3">Elsewhere</p>
              <div className="flex flex-col gap-3">
                {github && (
                  <a
                    href={github.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-ink hover:text-blue-soft transition-colors"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg glass shrink-0">
                      <GithubIcon size={15} />
                    </span>
                    GitHub
                  </a>
                )}
                {linkedin && (
                  <a
                    href={linkedin.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-ink hover:text-blue-soft transition-colors"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg glass shrink-0">
                      <LinkedinIcon size={15} />
                    </span>
                    LinkedIn
                  </a>
                )}
              </div>
            </div>

            <div className="h-px bg-line-soft" />
            <p className="text-xs text-faint leading-relaxed">{profile.location}</p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            onSubmit={handleSubmit}
            noValidate
            className="glass rounded-2xl p-6 sm:p-7"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              {fields.map((f) => (
                <div key={f.key} className={f.full ? "sm:col-span-2" : ""}>
                  <label htmlFor={f.key} className="block font-mono text-[11px] text-faint uppercase tracking-wide mb-2">
                    {f.label}
                  </label>
                  <input
                    id={f.key}
                    type={f.type}
                    required
                    value={form[f.key]}
                    onChange={(e) => setForm((prev) => ({ ...prev, [f.key]: e.target.value }))}
                    className="w-full rounded-lg bg-surface/70 border border-line px-4 py-2.5 text-sm text-ink placeholder:text-faint outline-none focus:border-blue-soft/70 transition-colors"
                    placeholder={f.label === "Subject" ? "Project inquiry" : f.label === "Email" ? "you@example.com" : "Your name"}
                  />
                </div>
              ))}
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block font-mono text-[11px] text-faint uppercase tracking-wide mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                  className="w-full resize-none rounded-lg bg-surface/70 border border-line px-4 py-2.5 text-sm text-ink placeholder:text-faint outline-none focus:border-blue-soft/70 transition-colors"
                  placeholder="Tell me a bit about what you're building..."
                />
              </div>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <Button type="submit" disabled={status === "submitting"} icon={<Send size={15} />}>
                {status === "submitting" ? "Sending..." : "Send Message"}
              </Button>

              <AnimatePresence mode="wait">
                {status === "success" && (
                  <motion.span
                    key="success"
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-1.5 text-sm text-mint"
                  >
                    <CheckCircle2 size={15} /> Message sent
                  </motion.span>
                )}
                {status === "error" && (
                  <motion.span
                    key="error"
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-sm text-red-400"
                  >
                    Please fill in every field with a valid email.
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
