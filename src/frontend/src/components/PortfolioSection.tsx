import { ArrowUpRight } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const PORTFOLIO_URL = "https://bp-elevio-portfolio.onhercules.app/";

export function PortfolioSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      id="portfolio"
      className="relative py-32 overflow-hidden"
      style={{ background: "oklch(1 0 0)" }}
    >
      <div className="container mx-auto px-6 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span
            className="text-xs font-semibold tracking-[0.3em] uppercase mb-4 block"
            style={{ color: "oklch(0.52 0.22 290)" }}
          >
            Our Work
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6"
            style={{ color: "oklch(0.12 0.02 240)" }}
          >
            FEATURED <span className="gradient-text">WORK</span>
          </h2>
          <p
            className="text-base max-w-xl mx-auto leading-relaxed mb-12"
            style={{ color: "oklch(0.45 0.02 240)" }}
          >
            Explore our portfolio of projects — crafted with precision,
            creativity, and a relentless focus on quality.
          </p>

          <motion.a
            href={PORTFOLIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-white text-base shadow-lg"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.52 0.22 290), oklch(0.45 0.22 255))",
              boxShadow: "0 8px 32px oklch(0.52 0.22 290 / 30%)",
            }}
            whileHover={{
              scale: 1.04,
              boxShadow: "0 12px 40px oklch(0.52 0.22 290 / 40%)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            View Full Portfolio
            <ArrowUpRight size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
