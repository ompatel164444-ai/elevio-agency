import { motion } from "motion/react";
import { SiBehance, SiInstagram, SiLinkedin, SiX } from "react-icons/si";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL = [
  { icon: SiX, href: "#", label: "X (Twitter)" },
  { icon: SiInstagram, href: "#", label: "Instagram" },
  { icon: SiLinkedin, href: "#", label: "LinkedIn" },
  { icon: SiBehance, href: "#", label: "Behance" },
];

export function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const year = new Date().getFullYear();

  return (
    <footer
      className="relative pt-16 pb-8 overflow-hidden"
      style={{
        background: "oklch(0.95 0.008 240)",
        borderTop: "1px solid oklch(0.9 0.01 240)",
      }}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          <button
            type="button"
            onClick={() => scrollTo("#hero")}
            className="cursor-pointer"
            data-ocid="footer.link"
          >
            <img
              src="/assets/uploads/Blue-and-White-Modern-Company-Logo_20260322_134527_0000-1.png"
              alt="Elevio"
              className="h-10 w-auto object-contain"
            />
          </button>

          <nav className="flex flex-wrap justify-center gap-6">
            {NAV_LINKS.map((link) => (
              <button
                type="button"
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-sm transition-colors duration-200 cursor-pointer"
                style={{ color: "oklch(0.4 0.02 240)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "oklch(0.55 0.2 255)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "oklch(0.4 0.02 240)";
                }}
                data-ocid="footer.link"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {SOCIAL.map((s) => {
              const Icon = s.icon;
              return (
                <motion.a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
                  style={{
                    background: "oklch(1 0 0)",
                    border: "1px solid oklch(0.88 0.01 240)",
                    color: "oklch(0.4 0.02 240)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "oklch(0.55 0.2 255)";
                    e.currentTarget.style.borderColor =
                      "oklch(0.55 0.2 255 / 40%)";
                    e.currentTarget.style.background = "oklch(0.96 0.02 255)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "oklch(0.4 0.02 240)";
                    e.currentTarget.style.borderColor = "oklch(0.88 0.01 240)";
                    e.currentTarget.style.background = "oklch(1 0 0)";
                  }}
                  data-ocid="footer.link"
                >
                  <Icon size={14} />
                </motion.a>
              );
            })}
          </div>
        </div>

        <div
          className="h-px mb-8"
          style={{ background: "oklch(0.88 0.01 240)" }}
        />

        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{ color: "oklch(0.5 0.02 240)" }}
        >
          <p>© {year} Elevio. All rights reserved.</p>
          <p>
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors"
              style={{ color: "oklch(0.55 0.2 255)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "oklch(0.4 0.22 255)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "oklch(0.55 0.2 255)";
              }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
