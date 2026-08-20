import { motion } from "framer-motion";

interface GlowFieldProps {
  variant?: "hero" | "subtle";
}

/**
 * Ambient, slow-drifting gradient orbs. Purely decorative — aria-hidden.
 * Motion is intentionally slow and continuous to read as atmosphere,
 * not attention-seeking animation.
 */
export function GlowField({ variant = "hero" }: GlowFieldProps) {
  const opacity = variant === "hero" ? 1 : 0.5;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full blur-[120px]"
        style={{ background: "var(--color-blue)", opacity: 0.22 * opacity }}
        animate={{ x: [0, 30, -10, 0], y: [0, 20, -20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 left-[-15%] h-[420px] w-[420px] rounded-full blur-[120px]"
        style={{ background: "var(--color-violet)", opacity: 0.18 * opacity }}
        animate={{ x: [0, -20, 15, 0], y: [0, -25, 10, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-15%] right-1/4 h-[360px] w-[360px] rounded-full blur-[110px]"
        style={{ background: "var(--color-cyan)", opacity: 0.14 * opacity }}
        animate={{ x: [0, 15, -20, 0], y: [0, -15, 15, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
