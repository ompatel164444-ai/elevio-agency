import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "oklch(1 0 0 / 90%)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid oklch(0.92 0.01 240)" : "none",
        boxShadow: scrolled ? "0 2px 20px oklch(0 0 0 / 6%)" : "none",
      }}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => scrollTo("#hero")}
            className="flex items-center gap-3 cursor-pointer"
            data-ocid="nav.link"
          >
            <img
              src="/assets/uploads/Blue-and-White-Modern-Company-Logo_20260322_134527_0000-1.png"
              alt="Elevio"
              className="h-9 w-auto object-contain"
            />
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                type="button"
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-sm font-medium transition-colors duration-200 cursor-pointer"
                style={{ color: "oklch(0.3 0.02 240)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "oklch(0.55 0.2 255)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "oklch(0.3 0.02 240)";
                }}
                data-ocid="nav.link"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button
              type="button"
              onClick={() => scrollTo("#contact")}
              className="btn-glow px-5 py-2.5 rounded-full text-sm font-semibold text-white"
              data-ocid="nav.primary_button"
            >
              Start Project
            </button>
          </div>

          <button
            type="button"
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{ color: "oklch(0.3 0.02 240)" }}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
            style={{
              background: "oklch(1 0 0)",
              borderTop: "1px solid oklch(0.92 0.01 240)",
            }}
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <button
                  type="button"
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-sm font-medium py-2 text-left transition-colors duration-200"
                  style={{ color: "oklch(0.3 0.02 240)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "oklch(0.55 0.2 255)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "oklch(0.3 0.02 240)";
                  }}
                  data-ocid="nav.link"
                >
                  {link.label}
                </button>
              ))}
              <button
                type="button"
                onClick={() => scrollTo("#contact")}
                className="btn-glow mt-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white text-center"
                data-ocid="nav.primary_button"
              >
                Start Project
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
