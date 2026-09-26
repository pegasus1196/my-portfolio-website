import { motion } from "framer-motion";
import { useState } from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Section } from "./Section";
import { profile } from "./data";

/** Contact links — edit destinations in data.ts */
const links = [
  { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/[^+\d]/g, "")}` },
  { icon: Github, label: "GitHub", href: profile.github },
  { icon: Linkedin, label: "LinkedIn", href: profile.linkedin },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <Section id="contact" eyebrow="Say hello" title="Let's Work Together">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="grid gap-4 sm:grid-cols-2">
          {links.map(({ icon: Icon, label, href }, i) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={{ y: -5, boxShadow: "var(--shadow-glow)" }}
              className="glass flex flex-col gap-3 rounded-3xl p-6"
            >
              <Icon className="size-5 text-primary" />
              <span className="text-sm break-all text-secondary-foreground">{label}</span>
            </motion.a>
          ))}
        </div>

        <motion.form
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true); // front-end only — no message is actually delivered
          }}
          className="glass flex flex-col gap-4 rounded-3xl p-7"
        >
          <input
            required
            placeholder="Your name"
            className="rounded-2xl border border-border bg-background/70 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
          />
          <input
            required
            type="email"
            placeholder="Your email"
            className="rounded-2xl border border-border bg-background/70 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
          />
          <textarea
            required
            rows={5}
            placeholder="Your message"
            className="resize-none rounded-2xl border border-border bg-background/70 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.03, boxShadow: "var(--shadow-glow)" }}
            whileTap={{ scale: 0.98 }}
            className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground"
          >
            {sent ? "Thank you — I'll be in touch!" : "Send Message"}
          </motion.button>
          {sent && (
            <p className="text-center text-xs text-muted-foreground">
              This form is a demo; please email me directly for a reply.
            </p>
          )}
        </motion.form>
      </div>
    </Section>
  );
}
