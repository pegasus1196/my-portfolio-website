import { motion } from "framer-motion";
import type { ReactNode } from "react";

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
    <section id={id} className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">{eyebrow}</p>
          <h2 className="gradient-text mt-3 text-4xl font-semibold sm:text-5xl">{title}</h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}
