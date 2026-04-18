import { PageShell } from "@/components/PageShell";
import { GlassCard } from "@/components/GlassCard";
import { Battery, CloudRain, Sun, Cpu, FlaskConical, Bot } from "lucide-react";

const milestones = [
  { icon: Battery, glow: "cyan" as const, domain: "Grid Infrastructure",
    s2026: "LFP storage scales for AI data centers.", s2050: "Decentralized microgrids + small modular reactors." },
  { icon: CloudRain, glow: "violet" as const, domain: "Climate Modeling",
    s2026: "Hybrid AI–probabilistic seasonal forecasting.", s2050: "Real-time planetary digital twins." },
  { icon: Sun, glow: "magenta" as const, domain: "Energy Generation",
    s2026: "Tandem perovskite-silicon cells > 34% efficiency.", s2050: "Fusion + orbital solar transmission." },
  { icon: Cpu, glow: "lime" as const, domain: "Computational Math",
    s2026: "Photonic processors for PDEs.", s2050: "Physics-native, Zettascale architectures." },
];

const NearFuture = () => (
  <PageShell
    eyebrow="HORIZON · 2026 — 2050"
    title={<>Maturation of the <span className="text-neon">Anthropocene</span></>}
    intro="The era of the moonshot is being superseded by pragmatism — integrated value chains, demand anchors, and the AI-electrification shock reshaping the grid."
  >
    {/* Demand shock */}
    <GlassCard glow="cyan" className="mb-10">
      <div className="flex items-start gap-5">
        <div className="w-12 h-12 rounded-xl glass-neon grid place-items-center shrink-0">
          <Bot className="w-5 h-5 text-neon-cyan" />
        </div>
        <div>
          <h2 className="font-display font-semibold text-2xl mb-3">The Year of the Agent</h2>
          <p className="text-muted-foreground leading-relaxed">
            2026–2030 marks the transition from generative chatbots to autonomous agentic systems capable of
            independent scientific research — designing experiments, generating hypotheses, and managing clinical
            trials. A structural divide emerges between <em>AI-rich</em> organizations with the GPU infrastructure to
            run frontier simulations and <em>AI-poor</em> entities relying on legacy methods.
          </p>
        </div>
      </div>
    </GlassCard>

    {/* Milestones grid */}
    <h2 className="font-display font-semibold text-2xl mb-5 mt-16">Technology Milestones</h2>
    <div className="grid md:grid-cols-2 gap-5">
      {milestones.map((m, i) => (
        <GlassCard key={i} glow={m.glow} delay={i * 0.08}>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-lg glass-neon grid place-items-center">
              <m.icon className="w-4 h-4 text-neon-cyan" />
            </div>
            <h3 className="font-display font-semibold text-lg">{m.domain}</h3>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="border-l-2 border-neon-cyan/40 pl-3">
              <p className="font-mono text-xs text-neon-cyan mb-1">2026</p>
              <p className="text-muted-foreground">{m.s2026}</p>
            </div>
            <div className="border-l-2 border-neon-magenta/40 pl-3">
              <p className="font-mono text-xs text-neon-magenta mb-1">2050</p>
              <p className="text-muted-foreground">{m.s2050}</p>
            </div>
          </div>
        </GlassCard>
      ))}
    </div>

    {/* Pharma */}
    <GlassCard glow="violet" className="mt-10">
      <div className="flex items-start gap-5">
        <div className="w-12 h-12 rounded-xl glass-neon grid place-items-center shrink-0">
          <FlaskConical className="w-5 h-5 text-neon-violet" />
        </div>
        <div>
          <h2 className="font-display font-semibold text-2xl mb-3">Precision Pharmacology</h2>
          <p className="text-muted-foreground leading-relaxed">
            By 2026, AI predicts toxicity and drug responses across multi-organ systems, drastically reducing
            clinical-trial failure rates. Targeted sodium channel drugs such as <em>suzetrigine</em> deliver the first
            non-addictive, opioid-free alternative for severe pain in decades.
          </p>
        </div>
      </div>
    </GlassCard>
  </PageShell>
);

export default NearFuture;
