import { motion } from "framer-motion";
import { Section } from "./Section";
import { skills } from "./data";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

/** Subtle accent colors for each skill group card */
const accents = [
  "from-primary/10 to-primary/5",
  "from-lavender/20 to-lavender/5",
  "from-blush/30 to-blush/10",
  "from-gold/15 to-gold/5",
  "from-accent/15 to-accent/5",
  "from-rose/15 to-rose/5",
  "from-primary/8 to-lavender/10",
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="Toolkit" title="Skills">
      <TooltipProvider delayDuration={200}>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <motion.div
              key={group.group}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6, boxShadow: "var(--shadow-glow)" }}
              className="glass relative overflow-hidden rounded-3xl p-7 transition-shadow"
            >
              {/* Subtle gradient accent per card */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${accents[i % accents.length]} pointer-events-none`}
              />
              <div className="relative">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary">
                    {group.items.length}
                  </span>
                  <h3 className="text-lg font-semibold text-secondary-foreground">{group.group}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((s) => (
                    <Tooltip key={s.name}>
                      <TooltipTrigger asChild>
                        <motion.span
                          whileHover={{ scale: 1.1 }}
                          className="cursor-default rounded-full border border-border bg-background/60 px-3.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary hover:bg-primary/5 hover:text-primary"
                        >
                          {s.name}
                        </motion.span>
                      </TooltipTrigger>
                      <TooltipContent
                        side="top"
                        className="max-w-xs rounded-xl bg-foreground px-4 py-2.5 text-xs leading-relaxed text-background shadow-lg"
                      >
                        {s.info}
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </TooltipProvider>
    </Section>
  );
}
