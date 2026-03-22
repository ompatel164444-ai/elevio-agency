import { AnimatePresence, motion } from "motion/react";
import type { Easing } from "motion/react";

const SPRING = {
  type: "spring" as const,
  stiffness: 400,
  damping: 18,
  mass: 0.8,
};

const EASE_OUT: Easing = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const letterVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
    y: 30,
    rotate: -8,
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotate: 0,
    transition: SPRING,
  },
};

const underlineVariants = {
  hidden: { scaleX: 0 },
  show: {
    scaleX: 1,
    transition: {
      duration: 0.5,
      ease: EASE_OUT,
      delay: 0.0,
    },
  },
};

const taglineVariants = {
  hidden: { opacity: 0, y: 6 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: EASE_OUT,
      delay: 0.15,
    },
  },
};

const LETTERS = [
  { char: "E", id: "pos-0" },
  { char: "L", id: "pos-1" },
  { char: "E", id: "pos-2" },
  { char: "V", id: "pos-3" },
  { char: "I", id: "pos-4" },
  { char: "O", id: "pos-5" },
];

export function LoadingScreen({ isVisible }: { isVisible: boolean }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: EASE_OUT }}
          className="fixed inset-0 z-[9998] flex flex-col items-center justify-center"
          style={{ background: "oklch(1 0 0)" }}
        >
          {/* Letter group */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex items-end gap-1"
          >
            {LETTERS.map(({ char, id }) => (
              <motion.span
                key={id}
                variants={letterVariants}
                className="text-7xl font-bold tracking-widest select-none"
                style={{
                  color: "oklch(0.12 0.02 240)",
                  display: "inline-block",
                  lineHeight: 1,
                  fontFamily: "inherit",
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>

          {/* Underline */}
          <motion.div
            variants={underlineVariants}
            initial="hidden"
            animate="show"
            className="mt-2 h-[3px] w-[21.5rem] rounded-full"
            style={{
              background:
                "linear-gradient(90deg, oklch(0.55 0.2 255), oklch(0.52 0.22 290))",
              transformOrigin: "left",
            }}
          />

          {/* Tagline */}
          <motion.p
            variants={taglineVariants}
            initial="hidden"
            animate="show"
            className="mt-4 text-xs font-semibold tracking-[0.35em] uppercase"
            style={{ color: "oklch(0.55 0.2 255)" }}
          >
            WEB DESIGN AGENCY
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
