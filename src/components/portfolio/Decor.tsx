import { motion } from "framer-motion";
import { Star } from "./Doodles";

/** Infinite looping text strip. */
export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="relative -rotate-1 overflow-hidden border-y border-primary/20 bg-card/50 py-4 backdrop-blur-sm">
      <div className="marquee flex w-max gap-10 whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-2xl font-light italic text-secondary-foreground sm:text-3xl">
            {t}
            <Star className="size-4 text-primary" />
          </span>
        ))}
      </div>
    </div>
  );
}

/** Animated wavy divider between sections. */
export function WaveDivider() {
  return (
    <div aria-hidden className="relative mx-auto h-16 max-w-5xl overflow-hidden px-6">
      <motion.svg
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        className="h-full w-full text-primary/40"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.path
          d="M0 30 Q 75 0 150 30 T 300 30 T 450 30 T 600 30 T 750 30 T 900 30 T 1050 30 T 1200 30"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        />
        <circle cx="600" cy="30" r="5" className="fill-current text-gold" />
      </motion.svg>
    </div>
  );
}
