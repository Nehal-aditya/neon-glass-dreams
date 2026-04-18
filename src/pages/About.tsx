import { ParallaxHero } from "@/components/ParallaxHero";
import { GlassCard } from "@/components/GlassCard";
import { BookOpen, Github, Globe } from "lucide-react";
import heroImg from "@/assets/hero-blackhole.jpg";

const About = () => (
  <>
    <ParallaxHero
      image={heroImg}
      alt="Supermassive black hole with luminous accretion disk"
      eyebrow="COLOPHON"
      tint="320 100% 60%"
      title={<>About this <span className="text-neon">Atlas</span></>}
      intro="A speculative companion to the report Humanity's Future: Near and Far — rendered as an interactive web experience."
    />

    <div className="container pb-16">
      <div className="grid md:grid-cols-2 gap-5">
        <GlassCard glow="cyan">
          <BookOpen className="w-6 h-6 text-neon-cyan mb-4" />
          <h3 className="font-display font-semibold text-xl mb-2">Source Material</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Synthesized from reporting on AI infrastructure, longtermist philosophy, the Kardashev scale, the Maxipok
            principle, whole brain emulation, and the five ages of the universe.
          </p>
        </GlassCard>

        <GlassCard glow="magenta">
          <Globe className="w-6 h-6 text-neon-magenta mb-4" />
          <h3 className="font-display font-semibold text-xl mb-2">Design Language</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Neon-glass: translucent panels, aurora gradients, monospaced telemetry, and aggressive use of negative space.
            Built with React, Vite, Tailwind CSS, and Framer Motion.
          </p>
        </GlassCard>

        <GlassCard glow="violet" className="md:col-span-2">
          <Github className="w-6 h-6 text-neon-violet mb-4" />
          <h3 className="font-display font-semibold text-xl mb-2">Deploy on GitHub Pages</h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            Push to <code className="text-neon-cyan font-mono">main</code>. The included workflow at{" "}
            <code className="text-neon-cyan font-mono">.github/workflows/deploy.yml</code> builds and publishes to Pages
            automatically. For project sites, set <code className="text-neon-cyan font-mono">BASE_PATH=/your-repo/</code>{" "}
            (already wired into <code className="text-neon-cyan font-mono">vite.config.ts</code>).
          </p>
          <pre className="glass rounded-lg p-4 overflow-x-auto text-xs font-mono text-muted-foreground">
{`# Settings → Pages → Source: GitHub Actions
git push origin main
# → live at https://<user>.github.io/<repo>/`}
          </pre>
        </GlassCard>
      </div>
    </div>
  </>
);

export default About;
