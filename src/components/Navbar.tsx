import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Overview" },
  { to: "/near-future", label: "2026–2050" },
  { to: "/paths", label: "Three Paths" },
  { to: "/cosmic", label: "Cosmic Eras" },
  { to: "/timeline", label: "Timeline" },
  { to: "/about", label: "About" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="container mt-4">
        <nav className="glass-neon rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg grid place-items-center bg-gradient-to-br from-neon-cyan to-neon-magenta animate-pulse-glow">
              <Sparkles className="w-4 h-4 text-background" />
            </div>
            <span className="font-display font-semibold tracking-tight text-sm sm:text-base">
              <span className="text-neon">Macro</span>·History
            </span>
          </NavLink>

          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === "/"}
                  className={({ isActive }) =>
                    cn(
                      "px-3 py-1.5 text-sm rounded-lg transition-all",
                      "text-muted-foreground hover:text-foreground hover:bg-white/5",
                      isActive && "text-foreground bg-white/10 shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
                    )
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/5"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {open && (
          <div className="md:hidden glass rounded-2xl mt-2 p-3 flex flex-col">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "px-3 py-2 text-sm rounded-lg",
                    isActive ? "text-foreground bg-white/10" : "text-muted-foreground"
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};
