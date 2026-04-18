import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode } from "react";

interface ParallaxHeroProps {
  image: string;
  alt: string;
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  /** Tint color (hsl values, e.g. "180 100% 55%"). Defaults to cyan. */
  tint?: string;
  children?: ReactNode;
}

/**
 * Hero with three parallax layers:
 *  1. Background image (slowest)
 *  2. Floating orbs (medium)
 *  3. Foreground content (normal)
 */
export const ParallaxHero = ({ image, alt, eyebrow, title, intro, tint = "180 100% 55%", children }: ParallaxHeroProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Layer transforms — driven by absolute scroll position
  const bgY = useTransform(scrollY, [0, 600], [0, 180]);
  const bgScale = useTransform(scrollY, [0, 600], [1.1, 1.25]);
  const orbY = useTransform(scrollY, [0, 600], [0, 100]);
  const contentY = useTransform(scrollY, [0, 600], [0, 40]);
  const contentOpacity = useTransform(scrollY, [0, 400], [1, 0.4]);

  // Mouse parallax
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMouse({ x, y });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-[88vh] flex items-end overflow-hidden"
    >
      {/* Layer 1 — Hero image with parallax + mouse drift */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{ y: bgY, scale: bgScale }}
      >
        <motion.img
          src={image}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            x: mouse.x * -20,
            y: mouse.y * -20,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        />
        {/* Color tint overlay */}
        <div
          className="absolute inset-0 mix-blend-color opacity-30"
          style={{ background: `hsl(${tint})` }}
        />
        {/* Bottom fade into the page background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,hsl(var(--background))_95%)]" />
      </motion.div>

      {/* Layer 2 — Floating glow orbs (medium parallax) */}
      <motion.div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{ y: orbY }}
      >
        <motion.div
          className="absolute top-1/4 left-[10%] w-72 h-72 rounded-full blur-3xl opacity-50"
          style={{
            background: `hsl(${tint} / 0.5)`,
            x: mouse.x * 30,
            y: mouse.y * 30,
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-[10%] w-96 h-96 rounded-full bg-neon-magenta/20 blur-3xl"
          style={{ x: mouse.x * -40, y: mouse.y * -40 }}
        />
        <div className="absolute inset-0 grid-bg opacity-20" />
      </motion.div>

      {/* Layer 3 — Foreground content */}
      <motion.div
        className="container relative z-10 pt-40 pb-16"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          {eyebrow && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-neon text-xs font-mono mb-5"
              style={{ color: `hsl(${tint})` }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: `hsl(${tint})` }} />
              {eyebrow}
            </div>
          )}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.05] mb-5">
            {title}
          </h1>
          {intro && (
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">{intro}</p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </motion.div>
      </motion.div>
    </section>
  );
};
