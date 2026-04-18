import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glow?: "cyan" | "magenta" | "violet" | "lime";
  delay?: number;
}

const glowMap = {
  cyan: "hover:shadow-[0_0_40px_hsl(180_100%_55%/0.35)] hover:border-neon-cyan/40",
  magenta: "hover:shadow-[0_0_40px_hsl(320_100%_60%/0.35)] hover:border-neon-magenta/40",
  violet: "hover:shadow-[0_0_40px_hsl(270_100%_65%/0.35)] hover:border-neon-violet/40",
  lime: "hover:shadow-[0_0_40px_hsl(130_100%_60%/0.35)] hover:border-neon-lime/40",
};

export const GlassCard = ({ children, className, glow = "cyan", delay = 0 }: GlassCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay }}
    className={cn(
      "glass rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1",
      glowMap[glow],
      className
    )}
  >
    {children}
  </motion.div>
);
