import { ArrowRight, CheckCircle, Mail, Send } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { useSubmitContactForm } from "../hooks/useQueries";

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const mutation = useSubmitContactForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    try {
      await mutation.mutateAsync({ name, email, message });
      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      // error handled by mutation.isError
    }
  };

  const inputBase =
    "w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300";
  const inputStyle = {
    border: "1.5px solid oklch(0.88 0.01 240)",
    background: "oklch(0.98 0.005 240)",
    color: "oklch(0.15 0.02 240)",
  };

  const handleFocus = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    e.target.style.borderColor = "oklch(0.55 0.2 255)";
    e.target.style.boxShadow = "0 0 0 3px oklch(0.55 0.2 255 / 12%)";
  };
  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    e.target.style.borderColor = "oklch(0.88 0.01 240)";
    e.target.style.boxShadow = "none";
  };

  return (
    <section
      id="contact"
      className="relative py-28 overflow-hidden"
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
            Let's Talk
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
            style={{ color: "oklch(0.12 0.02 240)" }}
          >
            START YOUR <span className="gradient-text">PROJECT</span>
          </h2>
          <p
            className="mt-4 text-base max-w-xl mx-auto leading-relaxed"
            style={{ color: "oklch(0.45 0.02 240)" }}
          >
            Ready to elevate your online presence? Let's build something
            extraordinary together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Form panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3 rounded-2xl p-8"
            style={{
              background: "oklch(1 0 0)",
              border: "1px solid oklch(0.92 0.01 240)",
              boxShadow: "0 4px 32px oklch(0 0 0 / 6%)",
            }}
            data-ocid="contact.panel"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center h-full py-12 text-center"
                data-ocid="contact.success_state"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{ background: "oklch(0.93 0.06 160)" }}
                >
                  <CheckCircle
                    size={32}
                    style={{ color: "oklch(0.5 0.18 160)" }}
                  />
                </div>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: "oklch(0.12 0.02 240)" }}
                >
                  Message Sent!
                </h3>
                <p
                  className="text-sm leading-relaxed max-w-sm"
                  style={{ color: "oklch(0.45 0.02 240)" }}
                >
                  Thank you for reaching out. We'll get back to you within 24
                  hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-semibold transition-colors"
                  style={{ color: "oklch(0.55 0.2 255)" }}
                  data-ocid="contact.secondary_button"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: "oklch(0.15 0.02 240)" }}
                >
                  Tell us about your project
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold tracking-wider uppercase mb-1.5"
                      style={{ color: "oklch(0.5 0.02 240)" }}
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      required
                      className={inputBase}
                      style={inputStyle}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      data-ocid="contact.input"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold tracking-wider uppercase mb-1.5"
                      style={{ color: "oklch(0.5 0.02 240)" }}
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john@example.com"
                      required
                      className={inputBase}
                      style={inputStyle}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      data-ocid="contact.input"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold tracking-wider uppercase mb-1.5"
                    style={{ color: "oklch(0.5 0.02 240)" }}
                  >
                    Project Details
                  </label>
                  <textarea
                    id="contact-message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your project, goals, and timeline..."
                    rows={5}
                    required
                    className={`${inputBase} resize-none`}
                    style={inputStyle}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    data-ocid="contact.textarea"
                  />
                </div>

                {mutation.isError && (
                  <p
                    className="text-xs"
                    style={{ color: "oklch(0.55 0.22 27)" }}
                    data-ocid="contact.error_state"
                  >
                    Something went wrong. Please try again.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={mutation.isPending}
                  className="btn-glow mt-2 flex items-center justify-center gap-2 py-3.5 rounded-xl text-base font-semibold text-white disabled:opacity-60 disabled:cursor-not-allowed"
                  data-ocid="contact.submit_button"
                >
                  {mutation.isPending ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 animate-spin"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeOpacity="0.3"
                        />
                        <path
                          d="M12 2a10 10 0 0 1 10 10"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <>
                      Send Message <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div
              className="rounded-2xl p-6"
              style={{
                background: "oklch(1 0 0)",
                border: "1px solid oklch(0.92 0.01 240)",
                boxShadow: "0 2px 16px oklch(0 0 0 / 5%)",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: "oklch(0.92 0.06 210)" }}
              >
                <Mail size={18} style={{ color: "oklch(0.45 0.18 210)" }} />
              </div>
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-1"
                style={{ color: "oklch(0.5 0.02 240)" }}
              >
                Email Us
              </p>
              <a
                href="mailto:hello.elevio@gmail.com"
                className="text-sm font-semibold transition-colors"
                style={{ color: "oklch(0.45 0.18 210)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "oklch(0.55 0.2 255)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "oklch(0.45 0.18 210)";
                }}
                data-ocid="contact.link"
              >
                hello.elevio@gmail.com
              </a>
            </div>

            <div
              className="rounded-2xl p-6 flex-1 relative overflow-hidden"
              style={{
                background: "oklch(0.93 0.05 255)",
                border: "1px solid oklch(0.85 0.08 255)",
              }}
            >
              <div
                className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, oklch(0.55 0.2 255 / 20%) 0%, transparent 70%)",
                }}
              />
              <h3
                className="text-lg font-bold mb-3 leading-snug"
                style={{ color: "oklch(0.2 0.05 255)" }}
              >
                Ready to <span className="gradient-text">elevate</span> your
                business?
              </h3>
              <p
                className="text-sm leading-relaxed mb-5"
                style={{ color: "oklch(0.4 0.06 255)" }}
              >
                We turn ideas into high-performing digital experiences. Let's
                start building your future today.
              </p>
              <div
                className="flex items-center gap-2 text-sm font-semibold"
                style={{ color: "oklch(0.45 0.2 255)" }}
              >
                <span>Response within 24h</span>
                <ArrowRight size={14} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
