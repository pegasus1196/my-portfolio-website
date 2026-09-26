import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import { Flower, Heart, Ring, Squiggle, Star } from "./Doodles";

/**
 * Fixed page-wide background: morphing aurora mesh, grain overlay and
 * drifting doodles with scroll + cursor parallax.
 */
const items = [
  { C: Flower, cls: "left-[6%] top-[18%] size-14 text-rose/50", depth: 0.25, mouse: 18 },
  { C: Star, cls: "right-[10%] top-[14%] size-6 text-gold", depth: 0.5, mouse: 30 },
  { C: Ring, cls: "right-[18%] top-[62%] size-16 text-gold/70", depth: 0.15, mouse: 0 },
  { C: Squiggle, cls: "left-[12%] top-[72%] w-24 text-lavender", depth: 0.35, mouse: 0 },
  { C: Heart, cls: "left-[46%] top-[88%] size-7 text-rose/40", depth: 0.6, mouse: 22 },
  { C: Star, cls: "left-[28%] top-[40%] size-4 text-rose/60", depth: 0.8, mouse: 0 },
  { C: Flower, cls: "right-[6%] top-[92%] size-10 text-lavender", depth: 0.4, mouse: 0 },
  { C: Star, cls: "right-[34%] top-[30%] size-3 text-gold", depth: 0.9, mouse: 0 },
];

function Item({ it, mx, my }: { it: (typeof items)[number]; mx: any; my: any }) {
  const { scrollY } = useScroll();
  const sy = useTransform(scrollY, (v) => -v * it.depth);
  const x = useTransform(mx, (v: number) => v * it.mouse);
  const yM = useTransform(my, (v: number) => v * it.mouse);
  const y = useTransform([sy, yM] as any, ([a, b]: number[]) => a + b);
  return (
    <motion.div className={`absolute ${it.cls}`} style={{ x, y }}>
      <motion.div
        animate={{ rotate: [0, 12, -8, 0], y: [0, -10, 0] }}
        transition={{ duration: 10 + it.depth * 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <it.C className="size-full" />
      </motion.div>
    </motion.div>
  );
}

export function AnimatedBackground() {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const mx = useSpring(rawX, { stiffness: 40, damping: 18 });
  const my = useSpring(rawY, { stiffness: 40, damping: 18 });

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      rawX.set(e.clientX / window.innerWidth - 0.5);
      rawY.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [rawX, rawY]);

  const bx = useTransform(mx, (v) => v * 40);
  const by = useTransform(my, (v) => v * 40);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="aurora absolute inset-[-20%]" />
      <motion.div style={{ x: bx, y: by }} className="blob left-[8%] top-[10%] size-96 bg-primary/25" />
      <motion.div
        style={{ x: useTransform(bx, (v) => -v), y: useTransform(by, (v) => -v) }}
        className="blob right-[5%] bottom-[10%] size-[28rem] bg-lavender/40"
      />
      {items.map((it, i) => (
        <Item key={i} it={it} mx={mx} my={my} />
      ))}
      <div className="grain absolute inset-0" />
    </div>
  );
}
