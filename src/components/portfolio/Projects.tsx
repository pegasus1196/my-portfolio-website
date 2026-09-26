import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Section } from "./Section";
import { projects } from "./data";

export function Projects() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <Section id="projects" eyebrow="Work" title="Selected Projects">
      <div className="grid gap-8 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.12 }}
            whileHover={{ y: -8 }}
            onClick={() => setOpen(open === i ? null : i)}
            className="glass group flex cursor-pointer flex-col rounded-3xl p-8 transition-shadow hover:shadow-[var(--shadow-glow)]"
          >
            {/* Project number + expand indicator */}
            <div className="mb-4 flex items-center justify-between">
              <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 font-display text-lg font-bold text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <motion.div
                animate={{ rotate: open === i ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="size-4 text-muted-foreground" />
              </motion.div>
            </div>

            <p className="text-xs font-medium uppercase tracking-widest text-primary">{p.period}</p>
            <h3 className="mt-3 text-xl leading-snug font-semibold">{p.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>

            {/* Expandable details */}
            <motion.ul
              initial={false}
              animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden text-sm text-secondary-foreground"
            >
              {p.details.map((d) => (
                <li key={d} className="mt-3 flex gap-2.5 leading-relaxed">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                  {d}
                </li>
              ))}
            </motion.ul>

            {/* Tech stack */}
            <div className="mt-6 flex flex-wrap gap-2 border-t border-border/50 pt-5">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
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
