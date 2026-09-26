import { motion } from "framer-motion";
import { useState } from "react";
import { Github, Linkedin, Mail, Phone, Send, Loader2 } from "lucide-react";
import { Section } from "./Section";
import { profile } from "./data";

/**
 * ── Formspree setup ──
 * 1. Go to https://formspree.io and create a free account.
 * 2. Create a new form → copy the form ID (e.g. "xyzabcde").
 * 3. Replace the placeholder below with your real form ID.
 */
const FORMSPREE_ID = "xgavnppe";

/** Contact links — edit destinations in data.ts */
const links = [
  { icon: Mail, label: profile.email, href: `mailto:${profile.email}`, color: "bg-primary/10 text-primary" },
  { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/[^+\d]/g, "")}`, color: "bg-lavender/20 text-accent-foreground" },
  { icon: Github, label: "GitHub", href: profile.github, color: "bg-secondary text-secondary-foreground" },
  { icon: Linkedin, label: "LinkedIn", href: profile.linkedin, color: "bg-primary/10 text-primary" },
];

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <Section id="contact" eyebrow="Say hello" title="Let's Work Together">
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Contact links */}
        <div className="flex flex-col gap-6">
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            Have a project in mind or just want to say hi? I'd love to hear from you.
            Reach out through any of these channels.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {links.map(({ icon: Icon, label, href, color }, i) => (
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
                className="glass group flex items-center gap-4 rounded-2xl p-5 transition-shadow"
              >
                <span className={`flex size-11 shrink-0 items-center justify-center rounded-xl ${color} transition-transform group-hover:scale-110`}>
                  <Icon className="size-5" />
                </span>
                <span className="text-sm break-all leading-snug text-secondary-foreground">{label}</span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Contact form */}
        <motion.form
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="glass flex flex-col gap-5 rounded-3xl p-8"
        >
          <h3 className="font-display text-lg font-semibold text-secondary-foreground">
            Send a Message
          </h3>
          <input
            required
            name="name"
            placeholder="Your name"
            className="rounded-2xl border border-border bg-background/70 px-5 py-3.5 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
          <input
            required
            name="email"
            type="email"
            placeholder="Your email"
            className="rounded-2xl border border-border bg-background/70 px-5 py-3.5 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
          <textarea
            required
            name="message"
            rows={5}
            placeholder="Your message"
            className="resize-none rounded-2xl border border-border bg-background/70 px-5 py-3.5 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
          <motion.button
            type="submit"
            disabled={status === "sending"}
            whileHover={{ scale: 1.03, boxShadow: "var(--shadow-glow)" }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 disabled:opacity-70"
          >
            {status === "sending" ? (
              <>
                Sending...
                <Loader2 className="size-4 animate-spin" />
              </>
            ) : status === "sent" ? (
              "Thank you — I'll be in touch!"
            ) : (
              <>
                Send Message
                <Send className="size-4" />
              </>
            )}
          </motion.button>
          {status === "error" && (
            <p className="text-center text-xs text-destructive">
              Something went wrong. Please try again or email me directly.
            </p>
          )}
        </motion.form>
      </div>
    </Section>
  );
}
