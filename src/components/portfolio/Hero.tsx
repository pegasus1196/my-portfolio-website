import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { Blobs } from "./Blobs";
import { profile } from "./data";

/** Typewriter for the animated tagline. */
function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[i % words.length] ?? "";
    const done = !del && text === word;
    const empty = del && text === "";
    const delay = done ? 1600 : empty ? 250 : del ? 40 : 75;

    const t = setTimeout(() => {
      if (done) return setDel(true);
      if (empty) {
        setDel(false);
        return setI((v) => v + 1);
      }
      setText(del ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
    }, delay);
    return () => clearTimeout(t);
  }, [text, del, i, words]);

  return text;
}

export function Hero() {
  const typed = useTypewriter(profile.tagline);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <Blobs />
      <div className="relative w-full max-w-4xl pt-28 pb-12 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-secondary/60 px-5 py-2 backdrop-blur-sm"
        >
          <span className="size-2 animate-pulse rounded-full bg-primary" />
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
            Hello, I'm
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="gradient-text text-5xl leading-[1.1] font-semibold sm:text-7xl lg:text-8xl"
        >
          {profile.name}
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="mt-8 flex items-center justify-center gap-3"
        >
          <span className="h-px w-12 bg-primary/40" />
          <p className="h-8 font-sans text-base text-secondary-foreground sm:text-lg lg:text-xl">
            {typed}
            <span className="ml-0.5 inline-block w-0.5 animate-pulse border-r-2 border-primary" />
          </p>
          <span className="h-px w-12 bg-primary/40" />
        </motion.div>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mx-auto mt-8 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-lg"
        >
          {profile.intro}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "var(--shadow-glow)" }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo("projects")}
            className="rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25"
          >
            View Projects
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo("contact")}
            className="glass rounded-full px-8 py-3.5 text-sm font-medium text-secondary-foreground"
          >
            Contact Me
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 flex justify-center"
        >
          <motion.button
            onClick={() => scrollTo("about")}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-muted-foreground/60 transition-colors hover:text-primary"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="size-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
