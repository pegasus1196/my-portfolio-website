import { motion } from "framer-motion";

type P = { className?: string };
const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export const Flower = ({ className }: P) => (
  <svg viewBox="0 0 48 48" className={className} {...stroke}>
    {[0, 72, 144, 216, 288].map((r) => (
      <ellipse key={r} cx="24" cy="13" rx="6" ry="10" transform={`rotate(${r} 24 24)`} />
    ))}
    <circle cx="24" cy="24" r="4" />
  </svg>
);

export const Star = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke}>
    <path d="M12 2c.6 5 2 7 10 10-8 3-9.4 5-10 10-.6-5-2-7-10-10 8-3 9.4-5 10-10z" />
  </svg>
);

export const Heart = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke}>
    <path d="M12 20s-7-4.3-8.6-9C2.3 7.6 4.6 4.5 7.8 4.6c1.8.1 3.2 1.2 4.2 2.8 1-1.6 2.4-2.7 4.2-2.8 3.2-.1 5.5 3 4.4 6.4C19 15.7 12 20 12 20z" />
  </svg>
);

export const SwirlArrow = ({ className }: P) => (
  <svg viewBox="0 0 64 40" className={className} {...stroke}>
    <path d="M4 30c10-2 14-14 8-18s-10 6-2 10 22 2 34-8" />
    <path d="M40 8l6 5-7 3" />
  </svg>
);

export const Squiggle = ({ className }: P) => (
  <svg viewBox="0 0 80 16" className={className} {...stroke}>
    <path d="M2 8c6-8 10 8 16 0s10 8 16 0 10 8 16 0 10 8 16 0 10 8 12 0" />
  </svg>
);

export const Ring = ({ className }: P) => (
  <svg viewBox="0 0 40 40" className={className} {...stroke}>
    <circle cx="20" cy="20" r="16" />
    <circle cx="20" cy="20" r="11" strokeDasharray="2 4" />
  </svg>
);

/** A gently floating + rotating wrapper for doodles. */
export function Floaty({
  children,
  className,
  delay = 0,
  rotate = 10,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  rotate?: number;
}) {
  return (
    <motion.span
      aria-hidden
      className={`pointer-events-none absolute ${className ?? ""}`}
      animate={{ y: [0, -8, 0], rotate: [-rotate, rotate, -rotate] }}
      transition={{ duration: 6 + delay, repeat: Infinity, ease: "easeInOut", delay }}
    >
      {children}
    </motion.span>
  );
}
