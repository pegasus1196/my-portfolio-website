import { motion } from "framer-motion";
import { Section } from "./Section";
import { skills } from "./data";

export function Skills() {
  return (
    <Section id="skills" eyebrow="Toolkit" title="Skills">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <motion.div
            key={group.group}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="glass rounded-3xl p-6"
          >
            <h3 className="text-lg font-semibold text-secondary-foreground">{group.group}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((s) => (
                <motion.span
                  key={s}
                  whileHover={{ scale: 1.1 }}
                  className="rounded-full border border-border bg-background/60 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
