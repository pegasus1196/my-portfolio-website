import { motion } from "framer-motion";
import { Heart } from "lucide-react";
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
        <p className="flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {profile.name} — designed & built with
          <Heart className="size-3.5 fill-primary text-primary" />
        </p>
      </motion.div>
    </footer>
  );
}
