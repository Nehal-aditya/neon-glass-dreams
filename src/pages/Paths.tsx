import { ParallaxHero } from "@/components/ParallaxHero";
import { GlassCard } from "@/components/GlassCard";
import { useState } from "react";
import { Skull, Rocket, Brain } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import heroImg from "@/assets/hero-neural.jpg";

type PathKey = "extinction" | "speciation" | "transcendence";

const paths: Record<PathKey, {
  title: string; icon: typeof Skull; glow: "magenta" | "cyan" | "violet"; tagline: string;
  body: { h: string; p: string }[];
}> = {
  extinction: {
    title: "Extinction Horizon", icon: Skull, glow: "magenta",
    tagline: "Existential risk · the Maxipok principle",
    body: [
      { h: "Engineered Pandemics", p: "Convergence of AI and synthetic biology lowers the floor on pathogen design. Median expert risk: ~2% extinction-grade by 2100." },
      { h: "AI Misalignment", p: "Recursive self-improvement could yield superintelligent systems with goals incompatible with human flourishing. AGI estimates: 10–50% by 2040–2060." },
      { h: "Geopolitical & Lock-in", p: "Nuclear brinkmanship and technologically enforced totalitarian 'lock-in' both threaten permanent trajectory change." },
    ],
  },
  speciation: {
    title: "Multi-Planetary Speciation", icon: Rocket, glow: "cyan",
    tagline: "Mars colonization · the rise of Homo martis",
    body: [
      { h: "Genetic Augmentation", p: "Synthetic 'patch' chromosomes augment the human genome with survival functions without altering the original 23 pairs." },
      { h: "Founder Effects", p: "Genetic drift plus extreme Martian pressures could yield a distinct species — Homo martis — within as few as ten generations." },
      { h: "CRISPR Germline", p: "Inheritable edits via CRISPR-Cas9 accelerate divergence once a self-sufficient colony ceases interbreeding with Earth." },
    ],
  },
  transcendence: {
    title: "Post-Biological Transcendence", icon: Brain, glow: "violet",
    tagline: "Singularity · whole brain emulation",
    body: [
      { h: "Law of Accelerating Returns", p: "Kurzweil situates the singularity in 2045: combined artificial computational power exceeds the biological intelligence of all humans combined." },
      { h: "Whole Brain Emulation", p: "Substrate-independent minds — uploaded, copied, and run faster than wetware — decouple cognition from biology entirely." },
      { h: "The K-Scale", p: "A transcendent civilization climbs from Type I (planetary, 10¹⁶ W) toward Type IV (universal, 10⁴⁶ W)." },
    ],
  },
};

const Paths = () => {
  const [active, setActive] = useState<PathKey>("extinction");
  const data = paths[active];
  const Icon = data.icon;

  return (
    <>
      <ParallaxHero
        image={heroImg}
        alt="Glowing neural network — cyan and magenta synaptic web in deep space"
        eyebrow="§ THE TRILEMMA"
        tint="270 100% 65%"
        title={<>Three <span className="text-neon">Divergent</span> Paths</>}
        intro="Humanity's trajectory is no longer a matter of passive survival, but a deliberate choice between three evolutionary futures. Select a path to explore its dynamics."
      />

      <div className="container pb-16">
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {(Object.keys(paths) as PathKey[]).map((k) => {
            const I = paths[k].icon;
            return (
              <button
                key={k}
                onClick={() => setActive(k)}
                className={cn(
                  "inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm transition-all",
                  active === k
                    ? "glass-neon text-foreground shadow-[0_0_30px_hsl(var(--primary)/0.3)]"
                    : "glass text-muted-foreground hover:text-foreground"
                )}
              >
                <I className="w-4 h-4" />
                {paths[k].title}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            <GlassCard glow={data.glow} className="mb-6">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl glass-neon grid place-items-center shrink-0">
                  <Icon className="w-6 h-6 text-neon-cyan" />
                </div>
                <div>
                  <p className="text-xs font-mono text-neon-cyan uppercase tracking-wider mb-1">{data.tagline}</p>
                  <h2 className="font-display font-bold text-3xl">{data.title}</h2>
                </div>
              </div>
            </GlassCard>

            <div className="grid md:grid-cols-3 gap-5">
              {data.body.map((b, i) => (
                <GlassCard key={b.h} glow={data.glow} delay={i * 0.08}>
                  <p className="font-mono text-xs text-muted-foreground mb-2">0{i + 1}</p>
                  <h3 className="font-display font-semibold text-lg mb-3">{b.h}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{b.p}</p>
                </GlassCard>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default Paths;
