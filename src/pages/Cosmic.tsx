import { PageShell } from "@/components/PageShell";
import { GlassCard } from "@/components/GlassCard";
import { Star, Atom, CircleDot, Snowflake } from "lucide-react";

const eras = [
  {
    icon: Star, glow: "cyan" as const, name: "Stelliferous Era", range: "Now — 10¹⁴ yr",
    body: "Stars are still forming, fusing, and dying. The era of conventional life. Red dwarfs become humanity's last home before stellar death — burning for trillions of years."
  },
  {
    icon: Atom, glow: "violet" as const, name: "Degenerate Era", range: "10¹⁵ — 10⁴⁵ yr",
    body: "Fusion ceases. The universe is dominated by white dwarfs, neutron stars, and black holes. Galaxies evaporate — 90% of remnants are flung into the void; 10% spiral into supermassive cores. Eventually, even protons decay."
  },
  {
    icon: CircleDot, glow: "magenta" as const, name: "Black Hole Era", range: "10⁴⁵ — 10¹⁰⁰ yr",
    body: "Only black holes remain as organized structure. The Penrose process extracts rotational energy from Kerr black holes — yielding up to 21% more energy than the input. Hawking radiation slowly evaporates them."
  },
  {
    icon: Snowflake, glow: "lime" as const, name: "Dark Era", range: "> 10¹⁰⁰ yr",
    body: "Heat death. Thermodynamic equilibrium. No work can be performed. Computation, intelligence, all activity ceases. Only stray particle annihilations across timescales that dwarf all that came before."
  },
];

const k_scale = [
  { type: "Type I — Planetary", power: "10¹⁶ W", desc: "Mastery of all energy on the home planet." },
  { type: "Type II — Stellar", power: "10²⁶ W", desc: "Harness a host star (e.g., Dyson Sphere)." },
  { type: "Type III — Galactic", power: "10³⁶ W", desc: "Command an entire galaxy's energy budget." },
  { type: "Type IV — Universal", power: "10⁴⁶ W", desc: "Manipulate the energy of the universe itself." },
];

const Cosmic = () => (
  <PageShell
    eyebrow="DEEP TIME · 10¹⁴ → 10¹⁰⁰ YEARS"
    title={<>Cosmic <span className="text-neon">Eras</span></>}
    intro="Beyond civilizations, beyond stars. The far future of physics and the survival strategies of any intelligence that endures."
  >
    <div className="grid md:grid-cols-2 gap-5 mb-16">
      {eras.map((e, i) => (
        <GlassCard key={e.name} glow={e.glow} delay={i * 0.1}>
          <div className="flex items-center justify-between mb-4">
            <div className="w-11 h-11 rounded-xl glass-neon grid place-items-center">
              <e.icon className="w-5 h-5 text-neon-cyan" />
            </div>
            <span className="font-mono text-xs text-muted-foreground">{e.range}</span>
          </div>
          <h3 className="font-display font-semibold text-xl mb-3">{e.name}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{e.body}</p>
        </GlassCard>
      ))}
    </div>

    <h2 className="font-display font-semibold text-3xl mb-5">The Kardashev Scale</h2>
    <p className="text-muted-foreground mb-6 max-w-2xl">A taxonomy of civilizations by total power consumption — a measure of cosmic ambition.</p>

    <div className="glass-neon rounded-2xl overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-white/5">
          <tr>
            <th className="text-left p-4 font-display font-medium">Type</th>
            <th className="text-left p-4 font-display font-medium font-mono">Power</th>
            <th className="text-left p-4 font-display font-medium">Capability</th>
          </tr>
        </thead>
        <tbody>
          {k_scale.map((k, i) => (
            <tr key={k.type} className="border-t border-white/5 hover:bg-white/5 transition-colors">
              <td className="p-4 font-medium">{k.type}</td>
              <td className="p-4 font-mono text-neon-cyan">{k.power}</td>
              <td className="p-4 text-muted-foreground">{k.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </PageShell>
);

export default Cosmic;
