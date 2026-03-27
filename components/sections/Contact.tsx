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
                { 
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.11,4 20,4M20,8.25L12,13L4,8.25V6L12,10.75L20,6V8.25Z"/>
                    </svg>
                  ), 
                  label: "Email", 
                  value: "ashleshasarma.contact@gmail.com", 
                  href: "mailto:ashleshasarma.contact@gmail.com" 
                },
                { 
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16"> 
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/> 
                    </svg>
                  ), 
                  label: "GitHub", 
                  value: "github.com/ashlesha-sarma", 
                  href: "https://github.com/ashlesha-sarma" 
                },
                { 
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 448 512" fill="currentColor">
                      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                    </svg>
                  ), 
                  label: "LinkedIn", 
                  value: "linkedin.com/in/ashlesha-sarma", 
                  href: "https://linkedin.com/in/ashlesha-sarma" 
                },
                { 
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" > 
                      <path fillRule="evenodd" clipRule="evenodd" d="M14 7C13.4477 7 13 7.44772 13 8V16C13 16.5523 13.4477 17 14 17H18C18.5523 17 19 16.5523 19 16V8C19 7.44772 18.5523 7 18 7H14ZM17 9H15V15H17V9Z" fill="currentColor" /> 
                      <path d="M6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9H10C10.5523 9 11 8.55228 11 8C11 7.44772 10.5523 7 10 7H6Z" fill="currentColor" /> 
                      <path d="M6 11C5.44772 11 5 11.4477 5 12C5 12.5523 5.44772 13 6 13H10C10.5523 13 11 12.5523 11 12C11 11.4477 10.5523 11 10 11H6Z" fill="currentColor" /> 
                      <path d="M5 16C5 15.4477 5.44772 15 6 15H10C10.5523 15 11 15.4477 11 16C11 16.5523 10.5523 17 10 17H6C5.44772 17 5 16.5523 5 16Z" fill="currentColor" /> 
                      <path fillRule="evenodd" clipRule="evenodd" d="M4 3C2.34315 3 1 4.34315 1 6V18C1 19.6569 2.34315 21 4 21H20C21.6569 21 23 19.6569 23 18V6C23 4.34315 21.6569 3 20 3H4ZM20 5H4C3.44772 5 3 5.44772 3 6V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V6C21 5.44772 20.5523 5 20 5Z" fill="currentColor" /> 
                    </svg>
                  ), 
                  label: "Portfolio", 
                  value: "ashlesha-sarma-portfolio.vercel.app", 
                  href: "https://ashlesha-sarma-portfolio.vercel.app" 
                },
              ].map(({ icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-beige/50 transition-colors group"
                >
                  <span className="text-accent-2 flex-shrink-0">{icon}</span>
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
