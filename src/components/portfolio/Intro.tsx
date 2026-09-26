import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { profile } from "./data";

/** Page-load intro curtain. Adjust the timeout to change its duration. */
export function Intro() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1700);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-background"
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.15em" }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="gradient-text font-display text-2xl font-semibold sm:text-4xl"
          >
            {profile.name}
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
