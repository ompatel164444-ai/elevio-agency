import {
  Code2,
  Layers,
  LineChart,
  Paintbrush,
  Search,
  Smartphone,
} from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const SERVICES = [
  {
    icon: Paintbrush,
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces that keep visitors engaged and drive conversions. Every pixel purposeful.",
    iconBg: "oklch(0.93 0.05 255)",
    iconColor: "oklch(0.45 0.2 255)",
    glow: "oklch(0.55 0.2 255 / 12%)",
  },
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Fast, scalable, and robust web applications built with modern technologies and best practices.",
    iconBg: "oklch(0.93 0.05 290)",
    iconColor: "oklch(0.42 0.22 290)",
    glow: "oklch(0.52 0.22 290 / 12%)",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description:
      "Responsive designs that look and perform flawlessly across every device and screen size.",
    iconBg: "oklch(0.92 0.06 210)",
    iconColor: "oklch(0.42 0.18 210)",
    glow: "oklch(0.6 0.18 210 / 12%)",
  },
  {
    icon: LineChart,
    title: "Conversion Optimization",
    description:
      "Data-driven design decisions that turn visitors into customers and maximize your ROI.",
    iconBg: "oklch(0.93 0.05 160)",
    iconColor: "oklch(0.4 0.18 160)",
    glow: "oklch(0.55 0.18 160 / 12%)",
  },
  {
    icon: Search,
    title: "SEO & Performance",
    description:
      "Blazing-fast websites optimized for search engines so your customers can find you easily.",
    iconBg: "oklch(0.93 0.05 50)",
    iconColor: "oklch(0.45 0.18 50)",
    glow: "oklch(0.65 0.18 50 / 12%)",
  },
  {
    icon: Layers,
    title: "Brand Identity",
    description:
      "Cohesive brand systems that tell your story, build trust, and make you unforgettable.",
    iconBg: "oklch(0.93 0.05 280)",
    iconColor: "oklch(0.42 0.18 280)",
    glow: "oklch(0.55 0.15 280 / 12%)",
  },
];

function ServiceCard({
  svc,
  index,
  isInView,
}: {
  svc: (typeof SERVICES)[0];
  index: number;
  isInView: boolean;
}) {
  const Icon = svc.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 + index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -8, transition: { duration: 0.25 } }}
      className="group relative rounded-2xl p-8 cursor-default transition-shadow duration-300"
      style={{
        background: "oklch(1 0 0)",
        border: "1px solid oklch(0.92 0.01 240)",
        boxShadow: "0 2px 16px oklch(0 0 0 / 5%)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          `0 8px 32px ${svc.glow}, 0 0 0 1.5px oklch(0.55 0.2 255 / 20%)`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 2px 16px oklch(0 0 0 / 5%)";
      }}
      data-ocid={`services.card.${index + 1}`}
    >
      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
        style={{ background: svc.iconBg }}
      >
        <Icon size={22} style={{ color: svc.iconColor }} />
      </div>

      {/* Content */}
      <h3
        className="text-base font-semibold mb-2 tracking-wide"
        style={{ color: "oklch(0.15 0.02 240)" }}
      >
        {svc.title}
      </h3>
      <p
        className="text-sm leading-relaxed"
        style={{ color: "oklch(0.45 0.02 240)" }}
      >
        {svc.description}
      </p>

      {/* Bottom accent line */}
      <div
        className="mt-5 h-px w-0 group-hover:w-full transition-all duration-500"
        style={{
          background: `linear-gradient(90deg, ${svc.iconColor}, transparent)`,
        }}
      />
    </motion.div>
  );
}

export function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      id="services"
      className="relative py-36 overflow-hidden"
      style={{ background: "oklch(0.97 0.008 240)" }}
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
            style={{ color: "oklch(0.55 0.2 255)" }}
          >
            What We Do
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
            style={{ color: "oklch(0.12 0.02 240)" }}
          >
            OUR <span className="gradient-text">SERVICES</span>
          </h2>
          <p
            className="mt-4 text-base max-w-xl mx-auto leading-relaxed"
            style={{ color: "oklch(0.45 0.02 240)" }}
          >
            We offer a full suite of digital design and development services to
            help your business thrive online.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((svc, i) => (
            <ServiceCard
              key={svc.title}
              svc={svc}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
