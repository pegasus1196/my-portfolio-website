import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { sections, profile } from "./data";

/** Sticky navbar with smooth-scroll links, active-section indicator and scroll progress bar. */
export function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <motion.div
        className="fixed inset-x-0 top-0 z-50 h-1 origin-left bg-primary"
        style={{ scaleX: progress }}
      />
      <header className="fixed inset-x-0 top-1 z-40 px-4 pt-3">
        <nav className="glass mx-auto flex max-w-4xl items-center justify-between rounded-full px-5 py-3">
          <button
            onClick={() => go("home")}
            className="font-display text-lg font-semibold tracking-tight"
          >
            {profile.name.split(" ")[0]}
            <span className="text-primary">.</span>
          </button>

          <ul className="hidden items-center gap-1 md:flex">
            {sections.map((s) => (
              <li key={s.id}>
                <button
                  onClick={() => go(s.id)}
                  className="relative rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {active === s.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-secondary"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span
                    className={`relative ${active === s.id ? "font-medium text-primary" : ""}`}
                  >
                    {s.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="rounded-full border border-border px-3 py-1.5 text-sm md:hidden"
          >
            {open ? "Close" : "Menu"}
          </button>
        </nav>

        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass mx-auto mt-2 max-w-4xl rounded-3xl p-3 md:hidden"
          >
            {sections.map((s) => (
              <li key={s.id}>
                <button
                  onClick={() => go(s.id)}
                  className={`w-full rounded-2xl px-4 py-2 text-left text-sm ${
                    active === s.id ? "bg-secondary text-primary" : "text-muted-foreground"
                  }`}
                >
                  {s.label}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </header>
    </>
  );
}
