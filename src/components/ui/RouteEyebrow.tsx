import { motion } from "framer-motion";

interface RouteEyebrowProps {
  path: string;
  label: string;
}

export function RouteEyebrow({ path, label }: RouteEyebrowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-5 flex items-center gap-3"
    >
      <span className="font-mono text-[13px] text-blue-soft tracking-tight">{path}</span>
      <span className="hidden sm:block h-px flex-1 max-w-16 bg-line" />
      <span className="sr-only">{label}</span>
    </motion.div>
  );
}
