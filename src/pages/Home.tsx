import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Atom, Rocket, Skull, Sparkles, Brain, Globe2 } from "lucide-react";
import { GlassCard } from "@/components/GlassCard";
import { Starfield } from "@/components/Starfield";

const Home = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden">
        <Starfield />
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-neon-violet/10 blur-3xl animate-float pointer-events-none" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-neon-cyan/10 blur-3xl animate-float pointer-events-none" style={{ animationDelay: "2s" }} />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_35%,hsl(var(--background))_90%)]" />

        <div className="container relative z-10 pt-32 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-neon text-xs font-mono mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse" />
              <span className="text-neon-cyan">TRANSMISSION · 2026 → 10<sup>100</sup> YEARS</span>
            </div>

            <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-[1.05] mb-8">
              The Macro-History of <span className="text-neon">Intelligence</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
              Three divergent paths await: <span className="text-foreground">existential closure</span>,{" "}
              <span className="text-foreground">multi-planetary speciation</span>, or{" "}
              <span className="text-foreground">post-biological transcendence</span>. An interactive atlas of the next
              10<sup>100</sup> years.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/near-future"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-magenta text-background font-medium shadow-[0_0_30px_hsl(180_100%_55%/0.5)] hover:shadow-[0_0_50px_hsl(180_100%_55%/0.7)] transition-all"
              >
                Begin in 2026
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/timeline"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass hover:border-neon-cyan/40 transition-all"
              >
                View Cosmic Timeline
              </Link>
            </div>
          </motion.div>

          {/* Stat strip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-20"
          >
            {[
              { v: "2045", l: "Projected Singularity" },
              { v: "10²⁶ W", l: "Type II Stellar" },
              { v: "10⁴⁵ yr", l: "Proton Decay" },
              { v: "10¹⁰⁰", l: "Final Evaporation" },
            ].map((s, i) => (
              <div key={i} className="glass rounded-xl p-4 text-center">
                <div className="font-display font-bold text-xl md:text-2xl text-neon">{s.v}</div>
                <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Three Paths */}
      <section className="container py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-12"
        >
          <p className="text-xs font-mono text-neon-magenta uppercase tracking-wider mb-3">§ Three Divergent Paths</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl">A choice, no longer passive.</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              icon: Skull, title: "Extinction", glow: "magenta" as const,
              desc: "99% of species have ended. Nuclear, biological, and AI alignment risks define the 21st-century window.",
              link: "/paths#extinction",
            },
            {
              icon: Rocket, title: "Speciation", glow: "cyan" as const,
              desc: "Multi-planetary life. CRISPR-augmented Homo martis emerges within 10 generations of isolation.",
              link: "/paths#speciation",
            },
            {
              icon: Brain, title: "Transcendence", glow: "violet" as const,
              desc: "Whole-brain emulation, recursive self-improvement, and post-biological intelligence by ~2045.",
              link: "/paths#transcendence",
            },
          ].map((p, i) => (
            <GlassCard key={i} glow={p.glow} delay={i * 0.1}>
              <Link to={p.link} className="block group">
                <div className="w-12 h-12 rounded-xl glass-neon grid place-items-center mb-5">
                  <p.icon className="w-5 h-5 text-neon-cyan" />
                </div>
                <h3 className="font-display font-semibold text-2xl mb-3 group-hover:text-neon transition-colors">
                  {p.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{p.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm text-neon-cyan">
                  Explore <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Eras strip */}
      <section className="container py-24">
        <div className="glass-neon rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="relative grid md:grid-cols-3 gap-8">
            <div>
              <Atom className="w-8 h-8 text-neon-cyan mb-4" />
              <p className="text-xs font-mono text-muted-foreground uppercase mb-2">Stelliferous Era</p>
              <p className="font-display font-bold text-2xl mb-2">10<sup>14</sup> yr</p>
              <p className="text-sm text-muted-foreground">Stars burn. Life as we know it.</p>
            </div>
            <div>
              <Globe2 className="w-8 h-8 text-neon-magenta mb-4" />
              <p className="text-xs font-mono text-muted-foreground uppercase mb-2">Degenerate Era</p>
              <p className="font-display font-bold text-2xl mb-2">10<sup>15–45</sup> yr</p>
              <p className="text-sm text-muted-foreground">White dwarfs, neutron stars, proton decay.</p>
            </div>
            <div>
              <Sparkles className="w-8 h-8 text-neon-violet mb-4" />
              <p className="text-xs font-mono text-muted-foreground uppercase mb-2">Black Hole Era</p>
              <p className="font-display font-bold text-2xl mb-2">10<sup>100</sup> yr</p>
              <p className="text-sm text-muted-foreground">Penrose harvest. Hawking evaporation.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
