import { motion } from "framer-motion";
import { profile } from "./data";

export function Footer() {
  return (
    <footer className="relative overflow-hidden px-6 pb-12 pt-16">
      {/* Top divider */}
      <div className="mx-auto mb-8 h-px max-w-5xl bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-5xl text-center"
      >
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {profile.name}
        </p>
      </motion.div>
    </footer>
  );
}
