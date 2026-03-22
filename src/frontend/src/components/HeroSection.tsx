import { motion } from "motion/react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

const headlineContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.028,
      delayChildren: 0.45,
    },
  },
};

const letterVariant = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

function toLetterEntries(text: string): { id: string; char: string }[] {
  const result: { id: string; char: string }[] = [];
  for (let pos = 0; pos < text.length; pos++) {
    result.push({ id: `${text}-pos${pos}`, char: text[pos] });
  }
  return result;
}

const HEADLINE_WORDS = {
  we: toLetterEntries("We"),
  build: toLetterEntries("Build"),
  websites: toLetterEntries("Websites"),
  that: toLetterEntries("That"),
  bring: toLetterEntries("Bring"),
  clients: toLetterEntries("Clients"),
};

function AnimatedWord({
  entries,
  className,
}: {
  entries: { id: string; char: string }[];
  className?: string;
}) {
  return (
    <span className={className} style={{ display: "inline" }}>
      {entries.map(({ id, char }) => (
        <motion.span
          key={id}
          variants={letterVariant}
          style={{ display: "inline-block" }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

export function HeroSection() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPortfolio = () => {
    document
      .querySelector("#portfolio")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden pt-32 pb-20"
      style={{ background: "oklch(0.98 0.005 240)" }}
    >
      {/* Soft orbs */}
      <div
        className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full orb-1 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.55 0.2 255 / 10%) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-1/3 -right-20 w-[600px] h-[600px] rounded-full orb-2 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.52 0.22 290 / 8%) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full orb-3 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.6 0.18 210 / 8%) 0%, transparent 70%)",
        }}
      />

      {/* Wave ribbon */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="wave-ribbon absolute top-1/2 left-0 right-0 h-64 -translate-y-1/2"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.55 0.2 255 / 6%) 0%, oklch(0.6 0.18 210 / 5%) 40%, oklch(0.52 0.22 290 / 6%) 100%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center gap-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.3}
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest"
            style={{
              background: "oklch(0.93 0.05 255)",
              border: "1px solid oklch(0.85 0.08 255)",
              color: "oklch(0.45 0.18 255)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full pulse-glow"
              style={{ background: "oklch(0.55 0.2 255)" }}
            />
            WEB DESIGN AGENCY
          </span>
        </motion.div>

        <motion.h1
          variants={headlineContainer}
          initial="hidden"
          animate="show"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight max-w-4xl"
          style={{ color: "oklch(0.12 0.02 240)" }}
        >
          <AnimatedWord entries={HEADLINE_WORDS.we} />
          <motion.span
            variants={letterVariant}
            style={{ display: "inline-block" }}
          >
            {"\u00A0"}
          </motion.span>
          <AnimatedWord entries={HEADLINE_WORDS.build} />
          <motion.span
            variants={letterVariant}
            style={{ display: "inline-block" }}
          >
            {"\u00A0"}
          </motion.span>
          <AnimatedWord
            entries={HEADLINE_WORDS.websites}
            className="gradient-text"
          />
          <br />
          <AnimatedWord entries={HEADLINE_WORDS.that} />
          <motion.span
            variants={letterVariant}
            style={{ display: "inline-block" }}
          >
            {"\u00A0"}
          </motion.span>
          <AnimatedWord entries={HEADLINE_WORDS.bring} />
          <motion.span
            variants={letterVariant}
            style={{ display: "inline-block" }}
          >
            {"\u00A0"}
          </motion.span>
          <AnimatedWord
            entries={HEADLINE_WORDS.clients}
            className="gradient-text"
          />
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.6}
          className="text-base md:text-lg max-w-2xl leading-relaxed"
          style={{ color: "oklch(0.45 0.02 240)" }}
        >
          Modern, fast, and high-converting websites — built for businesses that
          want to stand out and grow.
          <br />
          <span style={{ color: "oklch(0.55 0.04 240)" }}>
            From first impression to lasting loyalty, we craft digital
            experiences that convert.
          </span>
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.75}
          className="flex flex-col sm:flex-row items-center gap-4 mt-2"
        >
          <button
            type="button"
            onClick={scrollToContact}
            className="btn-glow px-8 py-3.5 rounded-full text-base font-semibold text-white min-w-40"
            data-ocid="hero.primary_button"
          >
            Contact Us
          </button>
          <button
            type="button"
            onClick={scrollToPortfolio}
            className="flex items-center gap-2 px-8 py-3.5 rounded-full text-base font-semibold transition-all duration-300"
            style={{
              border: "1px solid oklch(0.85 0.02 240)",
              color: "oklch(0.3 0.02 240)",
              background: "oklch(1 0 0)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "oklch(0.55 0.2 255 / 50%)";
              e.currentTarget.style.color = "oklch(0.55 0.2 255)";
              e.currentTarget.style.background = "oklch(0.96 0.02 255)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "oklch(0.85 0.02 240)";
              e.currentTarget.style.color = "oklch(0.3 0.02 240)";
              e.currentTarget.style.background = "oklch(1 0 0)";
            }}
            data-ocid="hero.secondary_button"
          >
            View Our Work
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="mt-16 flex flex-col items-center gap-2"
        >
          <span
            className="text-xs tracking-widest"
            style={{ color: "oklch(0.6 0.02 240)" }}
          >
            SCROLL
          </span>
          <div
            className="w-px h-12"
            style={{
              background:
                "linear-gradient(to bottom, oklch(0.55 0.2 255 / 50%), transparent)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
