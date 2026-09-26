import { motion } from "framer-motion";
import { Section } from "./Section";
import { coursework, education } from "./data";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Education & Foundations">
      <div className="grid gap-6 md:grid-cols-2">
        {education.map((e, i) => (
          <motion.article
            key={e.school}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="glass rounded-3xl p-7"
          >
            <p className="text-xs uppercase tracking-widest text-primary">{e.period}</p>
            <h3 className="mt-3 text-2xl font-semibold">{e.school}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{e.degree}</p>
            <p className="mt-4 inline-block rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
              {e.detail}
            </p>
          </motion.article>
        ))}
      </div>

      <div className="mt-12">
        <h3 className="text-center text-sm uppercase tracking-[0.3em] text-muted-foreground">
          Relevant Coursework
        </h3>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {coursework.map((c, i) => (
            <motion.span
              key={c}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              whileHover={{ scale: 1.08 }}
              className="glass rounded-full px-4 py-2 text-sm text-secondary-foreground"
            >
              {c}
            </motion.span>
          ))}
        </div>
      </div>
    </Section>
  );
}
