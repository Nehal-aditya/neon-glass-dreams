import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { Globe2, Sun, Sparkles, Infinity as InfinityIcon } from "lucide-react";

const types = [
  {
    name: "Type I",
    sub: "Planetary",
    power: "10¹⁶ W",
    desc: "Mastery of all energy resources of the home planet — winds, tides, geothermal, full solar incidence.",
    color: "180 100% 55%", // cyan
    icon: Globe2,
  },
  {
    name: "Type II",
    sub: "Stellar",
    power: "10²⁶ W",
    desc: "Harness the total output of a host star. Dyson swarms encase the sun, draining its luminosity.",
    color: "45 100% 60%", // amber
    icon: Sun,
  },
  {
    name: "Type III",
    sub: "Galactic",
    power: "10³⁶ W",
    desc: "Command the energy of an entire galaxy. Hundreds of billions of stars under coordinated control.",
    color: "270 100% 65%", // violet
    icon: Sparkles,
  },
  {
    name: "Type IV",
    sub: "Universal",
    power: "10⁴⁶ W",
    desc: "Manipulate the energy of the entire universe. Manipulation of dark energy and the cosmic web itself.",
    color: "320 100% 60%", // magenta
    icon: InfinityIcon,
  },
];

export const KardashevVisualizer = () => {
  const [value, setValue] = useState([0]);
  const idx = value[0];
  const t = types[idx];
  const Icon = t.icon;

  // Sphere radius grows from 40 → 130
  const r = 40 + idx * 30;
  // Glow intensity
  const glow = 12 + idx * 14;

  return (
    <div className="glass-neon rounded-3xl p-6 md:p-10 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="relative grid md:grid-cols-2 gap-8 items-center">
        {/* Visualization */}
        <div className="relative aspect-square w-full max-w-[400px] mx-auto">
          {/* Concentric orbital rings — appear progressively */}
          {[0, 1, 2, 3].map((ring) => (
            <motion.div
              key={ring}
              className="absolute inset-0 rounded-full border"
              style={{
                borderColor: `hsl(${t.color} / ${ring <= idx ? 0.25 : 0.05})`,
                transform: `scale(${0.4 + ring * 0.2})`,
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 30 + ring * 20, repeat: Infinity, ease: "linear" }}
            >
              {ring <= idx && (
                <div
                  className="absolute w-2 h-2 rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    background: `hsl(${t.color})`,
                    boxShadow: `0 0 12px hsl(${t.color})`,
                  }}
                />
              )}
            </motion.div>
          ))}

          {/* Galactic spiral arms — appear at Type III+ */}
          <AnimatePresence>
            {idx >= 2 && (
              <motion.svg
                key="spiral"
                viewBox="-100 -100 200 200"
                className="absolute inset-0 w-full h-full"
                initial={{ opacity: 0, rotate: 0 }}
                animate={{ opacity: 0.6, rotate: 360 }}
                exit={{ opacity: 0 }}
                transition={{ opacity: { duration: 0.6 }, rotate: { duration: 60, repeat: Infinity, ease: "linear" } }}
              >
                {[0, 1, 2, 3].map((arm) => (
                  <g key={arm} transform={`rotate(${arm * 90})`}>
                    <path
                      d="M 0 0 Q 30 -10 60 -30 T 90 -70"
                      stroke={`hsl(${t.color})`}
                      strokeWidth="1.5"
                      fill="none"
                      opacity="0.5"
                    />
                  </g>
                ))}
              </motion.svg>
            )}
          </AnimatePresence>

          {/* Universal cosmic web — Type IV */}
          <AnimatePresence>
            {idx >= 3 && (
              <motion.div
                key="web"
                className="absolute inset-0 rounded-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                style={{
                  background: `
                    radial-gradient(circle at 20% 30%, hsl(${t.color} / 0.4), transparent 25%),
                    radial-gradient(circle at 80% 20%, hsl(180 100% 55% / 0.3), transparent 25%),
                    radial-gradient(circle at 70% 80%, hsl(270 100% 65% / 0.4), transparent 25%),
                    radial-gradient(circle at 30% 70%, hsl(45 100% 60% / 0.3), transparent 25%)
                  `,
                  filter: "blur(8px)",
                }}
              />
            )}
          </AnimatePresence>

          {/* Central body — morphs in size and color */}
          <div className="absolute inset-0 grid place-items-center">
            <motion.div
              className="rounded-full relative"
              animate={{
                width: r * 2,
                height: r * 2,
                background:
                  idx === 0
                    ? `radial-gradient(circle at 35% 35%, hsl(200 80% 60%), hsl(220 70% 25%))` // planet
                    : idx === 1
                    ? `radial-gradient(circle at 50% 50%, hsl(50 100% 75%), hsl(${t.color}) 60%, hsl(20 100% 40%))` // star
                    : idx === 2
                    ? `radial-gradient(circle at 50% 50%, hsl(${t.color} / 0.9), hsl(${t.color} / 0.2) 70%, transparent)` // galactic core
                    : `radial-gradient(circle at 50% 50%, hsl(0 0% 100%), hsl(${t.color}) 40%, transparent 80%)`, // universal
                boxShadow: `0 0 ${glow * 4}px hsl(${t.color} / 0.6), 0 0 ${glow * 2}px hsl(${t.color} / 0.8) inset`,
              }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {/* Planet surface detail */}
              {idx === 0 && (
                <>
                  <div className="absolute inset-0 rounded-full" style={{
                    background: "radial-gradient(circle at 70% 60%, hsl(140 50% 35% / 0.6), transparent 30%), radial-gradient(circle at 30% 70%, hsl(140 50% 30% / 0.5), transparent 25%)",
                  }} />
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <motion.div
                      className="absolute -inset-2 rounded-full"
                      style={{ background: "radial-gradient(circle at 50% 30%, hsl(0 0% 100% / 0.15), transparent 40%)" }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    />
                  </div>
                </>
              )}

              {/* Star corona pulse */}
              {idx === 1 && (
                <motion.div
                  className="absolute inset-0 rounded-full"
                  animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.3, 0.6] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  style={{ boxShadow: `0 0 80px 20px hsl(${t.color} / 0.5)` }}
                />
              )}
            </motion.div>
          </div>

          {/* Floating particles */}
          {[...Array(idx * 4 + 4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                background: `hsl(${t.color})`,
                boxShadow: `0 0 8px hsl(${t.color})`,
                top: `${20 + (i * 37) % 60}%`,
                left: `${15 + (i * 53) % 70}%`,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: 2 + (i % 3),
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>

        {/* Info panel */}
        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-12 h-12 rounded-xl glass grid place-items-center"
                  style={{ boxShadow: `0 0 30px hsl(${t.color} / 0.4)` }}
                >
                  <Icon className="w-5 h-5" style={{ color: `hsl(${t.color})` }} />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider" style={{ color: `hsl(${t.color})` }}>
                    {t.sub} Civilization
                  </p>
                  <h3 className="font-display font-bold text-3xl">{t.name}</h3>
                </div>
              </div>

              <div className="glass rounded-xl p-4 mb-4">
                <p className="text-xs font-mono text-muted-foreground uppercase mb-1">Power Output</p>
                <p className="font-display font-bold text-3xl text-neon">{t.power}</p>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed">{t.desc}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slider */}
      <div className="relative mt-10">
        <Slider
          value={value}
          onValueChange={setValue}
          min={0}
          max={3}
          step={1}
          className="mb-4"
        />
        <div className="flex justify-between">
          {types.map((tt, i) => (
            <button
              key={tt.name}
              onClick={() => setValue([i])}
              className="flex flex-col items-center gap-1 group"
            >
              <span
                className="w-2 h-2 rounded-full transition-all"
                style={{
                  background: i <= idx ? `hsl(${tt.color})` : "hsl(var(--muted))",
                  boxShadow: i <= idx ? `0 0 10px hsl(${tt.color})` : "none",
                }}
              />
              <span
                className={`font-mono text-[10px] sm:text-xs uppercase transition-colors ${
                  i === idx ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                }`}
              >
                {tt.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
