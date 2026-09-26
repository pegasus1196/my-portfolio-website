import { motion } from "framer-motion";

/** Gently floating decorative gradient blobs. Tweak size/position/colors below. */
const blobs = [
  { className: "blob size-80 bg-primary/40 top-[-4rem] left-[-3rem]", d: 14, y: 40, x: 25 },
  { className: "blob size-96 bg-accent/50 top-32 right-[-5rem]", d: 18, y: -50, x: -30 },
  { className: "blob size-72 bg-blush/70 bottom-[-4rem] left-1/3", d: 16, y: -35, x: 40 },
];

export function Blobs() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          className={b.className}
          animate={{ y: [0, b.y, 0], x: [0, b.x, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: b.d, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
