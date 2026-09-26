import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { Flower, Floaty, Heart, Star, SwirlArrow } from "./Doodles";

/** Per-section background tint so scrolling doesn't feel repetitive. */
const tints: Record<string, string> = {
  about: "section-tint-a",
  projects: "section-tint-b",
  skills: "section-tint-c",
  contact: "section-tint-d",
};

/** Shared section shell with a scroll-in animated heading. */
export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`relative px-6 py-24 sm:py-32 ${tints[id] ?? ""}`}>
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto mb-14 w-fit text-center"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">{eyebrow}</p>
          <h2 className="gradient-text mt-3 text-5xl font-bold tracking-tight sm:text-6xl">
            {title}
          </h2>
          <motion.svg
            viewBox="0 0 200 12"
            className="mx-auto mt-2 h-3 w-40 text-primary"
            aria-hidden
          >
            <motion.path
              d="M2 8 C 50 2, 100 12, 198 4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </motion.svg>
          <Floaty className="-right-10 top-6 size-6 text-gold" rotate={20}>
            <Star className="size-full" />
          </Floaty>
          <Floaty className="-left-12 top-10 size-8 text-rose/50" delay={1.5}>
            {id === "projects" || id === "contact" ? <Heart className="size-full" /> : <Flower className="size-full" />}
          </Floaty>
          <Floaty className="-right-20 -bottom-4 hidden w-14 text-lavender sm:block" delay={0.8} rotate={6}>
            <SwirlArrow className="w-full" />
          </Floaty>
        </motion.div>
        {children}
      </div>
    </section>
  );
}
