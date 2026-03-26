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
          <span className="label-mono">§ 05 — Contact</span>
          <span className="block flex-1 h-px bg-gradient-to-r from-accent/50 to-transparent max-w-xs" />
        </div>

        <div className="grid md:grid-cols-2 gap-14 items-start">
          {/* Left — copy */}
          <div>
            <h2
              className="display-lg text-ink mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Let&apos;s build something{" "}
              <span className="italic text-accent-2">together.</span>
            </h2>

            <p className="text-ink/60 leading-relaxed mb-8 max-w-sm">
              Whether you have a project in mind, a question about my work, or
              just want to say hi — I read every message and reply within 48
              hours.
            </p>

            {/* Contact info */}
            <div className="space-y-4">
              {[
                { icon: "✉", label: "Email", value: "hello@alexchen.dev", href: "mailto:hello@alexchen.dev" },
                { icon: "◈", label: "GitHub", value: "github.com/alexchen", href: "https://github.com" },
                { icon: "◇", label: "LinkedIn", value: "linkedin.com/in/alexchen", href: "https://linkedin.com" },
                { icon: "◉", label: "Twitter / X", value: "@alexchen_dev", href: "https://x.com" },
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
            {/* Tape */}
            <div
              className="tape"
              style={{ top: "-10px", right: "28px", transform: "rotate(2deg)" }}
              aria-hidden
            />

            <div className="paper-card rounded-2xl p-8 pt-10">
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
                      className="w-full px-4 py-3 rounded-xl border border-grid/80 bg-cream-light text-ink placeholder-ink/30 text-sm focus:outline-none focus:border-accent-2/40 focus:ring-2 focus:ring-accent-2/15 transition-all duration-200"
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
                      className="w-full px-4 py-3 rounded-xl border border-grid/80 bg-cream-light text-ink placeholder-ink/30 text-sm focus:outline-none focus:border-accent-2/40 focus:ring-2 focus:ring-accent-2/15 transition-all duration-200"
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
                      className="w-full px-4 py-3 rounded-xl border border-grid/80 bg-cream-light text-ink placeholder-ink/30 text-sm focus:outline-none focus:border-accent-2/40 focus:ring-2 focus:ring-accent-2/15 transition-all duration-200 resize-none"
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
                    className="btn-primary w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <>
                        <span className="inline-block w-3.5 h-3.5 border-2 border-accent-2/40 border-t-accent-2 rounded-full animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Message
                        <span className="text-accent-2">→</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
