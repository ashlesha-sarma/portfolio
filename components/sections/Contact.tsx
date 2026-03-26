"use client";

import { useState } from "react";
import { useScrollFade } from "@/hooks/useScrollFade";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const ref = useScrollFade();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status !== "idle") setStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setFeedback(data.error ?? "Something went wrong.");
      } else {
        setStatus("success");
        setFeedback(data.message ?? "Message sent!");
        setForm({ name: "", email: "", message: "" });
      }
    } catch {
      setStatus("error");
      setFeedback("Network error — please try again.");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
      <div ref={ref} className="section-fade">
        {/* Label */}
        <div className="flex items-center gap-3 mb-14">
          <span className="label-mono">06 — Contact</span>
          <span className="block flex-1 h-px bg-gradient-to-r from-accent/50 to-transparent max-w-xs" />
        </div>

        <div className="grid md:grid-cols-2 gap-14 items-start">
          {/* Left — copy */}
          <div>
            <h2
              className="display-lg text-ink mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Let&apos;s build and grow{" "}
              <span className="italic text-accent-2">together.</span>
            </h2>

            <p className="text-ink/60 leading-relaxed mb-8 max-w-sm">
              Reach out for collaboration, internship opportunities, project
              discussions, or anything related to full stack and AI/ML work.
            </p>

            {/* Contact info */}
            <div className="space-y-4">
              {[
                { icon: "✆", label: "Phone", value: "+91-82550-51793", href: "tel:+918255051793" },
                { icon: "✉", label: "Email", value: "ashleshasarma.contact@gmail.com", href: "mailto:ashleshasarma.contact@gmail.com" },
                { icon: "◈", label: "GitHub", value: "github.com/ashlesha-sarma", href: "https://github.com/ashlesha-sarma" },
                { icon: "◇", label: "LinkedIn", value: "linkedin.com/in/ashlesha-sarma", href: "https://linkedin.com/in/ashlesha-sarma" },
                { icon: "◉", label: "Portfolio", value: "ashlesha-sarma-portfolio.vercel.app", href: "https://ashlesha-sarma-portfolio.vercel.app" },
              ].map(({ icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-beige/50 transition-colors group"
                >
                  <span className="text-accent-2 text-sm">{icon}</span>
                  <div>
                    <div className="label-mono text-[10px] mb-0.5">{label}</div>
                    <div className="text-sm text-ink/70 group-hover:text-ink transition-colors">
                      {value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="relative">
            {/* Pin */}
            <div
              className="absolute z-20"
              style={{ top: "-18px", left: "50%", transform: "translateX(-50%)" }}
              aria-hidden
            >
              <div className="relative w-10 h-10 flex items-center justify-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="32" 
                  height="32" 
                  fill="#5B88B2" 
                  className="bi bi-pin-angle-fill drop-shadow-md z-10" 
                  viewBox="0 0 16 16"
                >
                  <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a5.927 5.927 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a5.922 5.922 0 0 1 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146z"/> 
                </svg>
                {/* Pin shadow on paper */}
                <div className="absolute bottom-1 right-2 w-4 h-4 bg-black/15 rounded-full blur-md" style={{ transform: "translate(2px, 2px)" }}></div>
              </div>
            </div>

            <div 
              className="rounded-2xl p-8 pt-10 relative overflow-hidden"
              style={{
                background: "rgba(91, 136, 178, 0.12)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.08), 0 8px 16px rgba(0,0,0,0.04)",
                transform: "translateY(-10px)",
                border: "1px solid rgba(255,255,255,0.5)"
              }}
            >
              {/* Glossy top highlight overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent pointer-events-none" style={{ height: "40%" }} />
              
              <div className="relative z-10">
              {status === "success" ? (
                <div className="text-center py-10">
                  <div className="wax-seal mx-auto mb-5">✓</div>
                  <h3
                    className="text-xl font-semibold text-ink mb-2"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    Message received!
                  </h3>
                  <p className="text-sm text-ink/60 mb-6">{feedback}</p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="btn-secondary px-6 py-2.5 rounded-full text-sm font-medium"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="label-mono text-[10px] mb-1.5 block"
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Jane Smith"
                      className="w-full px-4 py-3 rounded-xl text-ink placeholder-ink/40 text-sm focus:outline-none transition-all duration-200"
                      style={{
                        background: "rgba(255,255,255,0.4)",
                        border: "1px solid rgba(255,255,255,0.6)",
                        boxShadow: "inset 0 2px 4px rgba(0,0,0,0.02)"
                      }}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="label-mono text-[10px] mb-1.5 block"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 rounded-xl text-ink placeholder-ink/40 text-sm focus:outline-none transition-all duration-200"
                      style={{
                        background: "rgba(255,255,255,0.4)",
                        border: "1px solid rgba(255,255,255,0.6)",
                        boxShadow: "inset 0 2px 4px rgba(0,0,0,0.02)"
                      }}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="label-mono text-[10px] mb-1.5 block"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about your project, idea, or question..."
                      className="w-full px-4 py-3 rounded-xl text-ink placeholder-ink/40 text-sm focus:outline-none transition-all duration-200 resize-none"
                      style={{
                        background: "rgba(255,255,255,0.4)",
                        border: "1px solid rgba(255,255,255,0.6)",
                        boxShadow: "inset 0 2px 4px rgba(0,0,0,0.02)"
                      }}
                    />
                  </div>

                  {/* Error */}
                  {status === "error" && (
                    <div className="flex items-center gap-2 text-red-500/80 text-sm bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                      <span>⚠</span> {feedback}
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-white disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      background: "linear-gradient(135deg, #7aa4cb 0%, #5B88B2 50%, #4a7299 100%)",
                      boxShadow: "0 4px 12px rgba(91, 136, 178, 0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
                      border: "1px solid rgba(74, 114, 153, 0.4)"
                    }}
                  >
                    {status === "loading" ? (
                      <>
                        <span className="inline-block w-3.5 h-3.5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Message
                        <span className="opacity-80">→</span>
                      </>
                    )}
                  </button>
                </form>
              )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
