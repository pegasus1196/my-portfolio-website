import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";
import { Section } from "./Section";
import { coursework, education } from "./data";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Education & Foundations">
      <div className="grid gap-8 md:grid-cols-2">
        {education.map((e, i) => (
          <motion.article
            key={e.school}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            whileHover={{ y: -6, boxShadow: "var(--shadow-glow)" }}
            className="glass group relative overflow-hidden rounded-3xl p-8 transition-shadow"
          >
            {/* Icon */}
            <div className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-primary/10">
              <GraduationCap className="size-6 text-primary" />
            </div>
            <p className="text-xs font-medium uppercase tracking-widest text-primary">{e.period}</p>
            <h3 className="mt-3 text-2xl font-semibold leading-snug">{e.school}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.degree}</p>
            <p className="mt-5 inline-block rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
              {e.detail}
            </p>
            {/* Decorative corner accent */}
            <div className="absolute right-6 top-6 size-16 rounded-full bg-primary/5 transition-transform group-hover:scale-125" />
          </motion.article>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-16"
      >
        <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-secondary/50 px-5 py-2">
          <BookOpen className="size-4 text-primary" />
          <h3 className="text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Relevant Coursework
          </h3>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {coursework.map((c, i) => (
            <motion.span
              key={c}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              whileHover={{ scale: 1.08, boxShadow: "var(--shadow-soft)" }}
              className="glass rounded-full px-5 py-2.5 text-sm font-medium text-secondary-foreground transition-shadow"
            >
              {c}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
