import { Clock, Headphones, Star, Trophy } from "lucide-react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "motion/react";
import { useEffect, useRef } from "react";

const STATS = [
  {
    icon: Trophy,
    value: 50,
    suffix: "+",
    label: "Projects Delivered",
    iconBg: "oklch(0.93 0.06 50)",
    iconColor: "oklch(0.5 0.18 50)",
  },
  {
    icon: Star,
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
    iconBg: "oklch(0.92 0.06 210)",
    iconColor: "oklch(0.45 0.18 210)",
  },
  {
    icon: Clock,
    value: 5,
    suffix: "+",
    label: "Years Experience",
    iconBg: "oklch(0.93 0.05 255)",
    iconColor: "oklch(0.45 0.2 255)",
  },
  {
    icon: Headphones,
    value: 24,
    suffix: "/7",
    label: "Support Available",
    iconBg: "oklch(0.93 0.05 290)",
    iconColor: "oklch(0.42 0.22 290)",
  },
];

function AnimatedCounter({
  value,
  suffix,
  started,
}: { value: number; suffix: string; started: boolean }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!started) return;
    const controls = animate(count, value, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [started, value, count]);

  return (
    <>
      <motion.span ref={ref}>{rounded}</motion.span>
      {suffix}
    </>
  );
}

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      id="why-us"
      className="relative py-28 overflow-hidden"
      style={{ background: "oklch(1 0 0)" }}
    >
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="text-xs font-semibold tracking-[0.3em] uppercase mb-4 block"
            style={{ color: "oklch(0.6 0.18 210)" }}
          >
            Our Numbers
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
            style={{ color: "oklch(0.12 0.02 240)" }}
          >
            WHY CHOOSE <span className="gradient-text">US</span>
          </h2>
          <p
            className="mt-4 text-base max-w-xl mx-auto leading-relaxed"
            style={{ color: "oklch(0.45 0.02 240)" }}
          >
            Numbers that speak louder than words. Our track record proves our
            commitment to excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.1 + i * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group relative rounded-2xl p-6 text-center"
                style={{
                  background: "oklch(0.97 0.008 240)",
                  border: "1px solid oklch(0.92 0.01 240)",
                  boxShadow: "0 2px 16px oklch(0 0 0 / 4%)",
                }}
                data-ocid={`stats.card.${i + 1}`}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: stat.iconBg }}
                >
                  <Icon size={22} style={{ color: stat.iconColor }} />
                </div>

                {/* Counter */}
                <div
                  className="text-4xl font-bold mb-1 tabular-nums"
                  style={{ color: "oklch(0.12 0.02 240)" }}
                >
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    started={isInView}
                  />
                </div>

                {/* Label */}
                <p
                  className="text-sm font-medium"
                  style={{ color: "oklch(0.5 0.02 240)" }}
                >
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
