import { motion } from "framer-motion";
import { useState } from "react";
import { Section } from "./Section";
import { projects } from "./data";

export function Projects() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <Section id="projects" eyebrow="Work" title="Selected Projects">
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.12 }}
            whileHover={{ y: -8, rotate: -0.4 }}
            onHoverStart={() => setOpen(i)}
            onHoverEnd={() => setOpen(null)}
            onClick={() => setOpen(open === i ? null : i)}
            className="glass flex flex-col rounded-3xl p-7"
          >
            <p className="text-xs uppercase tracking-widest text-primary">{p.period}</p>
            <h3 className="mt-3 text-xl leading-snug font-semibold">{p.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>

            {/* Hover (or tap on mobile) to reveal the details */}
            <motion.ul
              initial={false}
              animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden text-sm text-secondary-foreground"
            >
              {p.details.map((d) => (
                <li key={d} className="mt-3 flex gap-2 leading-relaxed">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                  {d}
                </li>
              ))}
            </motion.ul>

            <div className="mt-5 flex flex-wrap gap-2 pt-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
