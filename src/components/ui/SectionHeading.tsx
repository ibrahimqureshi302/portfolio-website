import { motion } from "framer-motion";
import { RouteEyebrow } from "./RouteEyebrow";

interface SectionHeadingProps {
  path: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({ path, title, description, align = "left" }: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <div className={isCenter ? "flex flex-col items-center text-center" : ""}>
      <RouteEyebrow path={path} label={title} />
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-ink max-w-xl"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className={`mt-4 text-muted leading-relaxed max-w-lg ${isCenter ? "mx-auto" : ""}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
