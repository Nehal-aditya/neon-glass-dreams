import { PageShell } from "@/components/PageShell";
import { motion } from "framer-motion";

const points = [
  { t: "2026", c: "magenta", title: "Pipeline Cleanup", body: "Climate tech and AI shift from speculation to disciplined execution." },
  { t: "2030", c: "cyan", title: "Year of the Agent", body: "Autonomous AI systems conduct independent scientific research." },
  { t: "2045", c: "violet", title: "Projected Singularity", body: "Combined artificial computation surpasses all biological intelligence." },
  { t: "2050", c: "cyan", title: "Decentralized Energy", body: "Microgrids, modular reactors, orbital solar transmission." },
  { t: "10 gens", c: "magenta", title: "Homo martis", body: "Mars founder effects + CRISPR yield a distinct species." },
  { t: "10¹⁴ yr", c: "lime", title: "Stelliferous End", body: "The last red dwarfs cease fusion." },
  { t: "10⁴⁵ yr", c: "violet", title: "Proton Decay", body: "Matter dissolves; only black holes remain." },
  { t: "10¹⁰⁰ yr", c: "magenta", title: "Final Evaporation", body: "Last black holes vanish. Heat death is complete." },
];

const colorMap: Record<string, string> = {
  cyan: "bg-neon-cyan shadow-[0_0_20px_hsl(180_100%_55%/0.7)]",
  magenta: "bg-neon-magenta shadow-[0_0_20px_hsl(320_100%_60%/0.7)]",
  violet: "bg-neon-violet shadow-[0_0_20px_hsl(270_100%_65%/0.7)]",
  lime: "bg-neon-lime shadow-[0_0_20px_hsl(130_100%_60%/0.7)]",
};

const Timeline = () => (
  <PageShell
    eyebrow="∞ TEMPORAL ATLAS"
    title={<>The Arc of <span className="text-neon">Intelligence</span></>}
    intro="From the AI-electrification shock of 2026 to the final evaporation of black holes — a single thread through deep time."
  >
    <div className="relative max-w-3xl mx-auto pl-8">
      <div className="absolute left-2 top-2 bottom-2 w-px bg-gradient-to-b from-neon-cyan via-neon-magenta to-neon-violet opacity-60" />

      {points.map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
          className="relative pb-10"
        >
          <div className={`absolute -left-[26px] top-2 w-3 h-3 rounded-full ${colorMap[p.c]}`} />
          <div className="glass rounded-xl p-5 hover:border-neon-cyan/30 transition-all hover:-translate-y-1 duration-300">
            <p className="font-mono text-xs text-neon-cyan mb-1">T = {p.t}</p>
            <h3 className="font-display font-semibold text-lg mb-1">{p.title}</h3>
            <p className="text-muted-foreground text-sm">{p.body}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </PageShell>
);

export default Timeline;
