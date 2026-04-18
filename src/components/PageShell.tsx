import { motion } from "framer-motion";
import { ReactNode } from "react";

export const PageShell = ({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
}) => (
  <div className="container pt-32 pb-16">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mb-12"
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-mono text-neon-cyan mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse" />
          {eyebrow}
        </div>
      )}
      <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-5">{title}</h1>
      {intro && <p className="text-lg text-muted-foreground leading-relaxed">{intro}</p>}
    </motion.div>
    {children}
  </div>
);
