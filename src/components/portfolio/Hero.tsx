import { motion } from "framer-motion";
import { useEffect, useState } from "react";
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
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-6">
      <Blobs />
      <div className="relative mx-auto max-w-3xl pt-28 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-xs uppercase tracking-[0.35em] text-muted-foreground"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="gradient-text mt-5 text-5xl leading-[1.05] font-semibold sm:text-7xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="mt-6 h-7 font-sans text-base text-secondary-foreground sm:text-lg"
        >
          {typed}
          <span className="ml-0.5 inline-block w-px animate-pulse border-r border-primary" />
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base"
        >
          {profile.intro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "var(--shadow-glow)" }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo("projects")}
            className="rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground"
          >
            View Projects
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo("contact")}
            className="glass rounded-full px-7 py-3 text-sm font-medium text-secondary-foreground"
          >
            Contact Me
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
