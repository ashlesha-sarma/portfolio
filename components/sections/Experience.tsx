"use client";

import { useScrollFade } from "@/hooks/useScrollFade";

const jobs = [
  {
    company: "TU-CODEs, Tezpur University",
    role: "Core Programming Team Member",
    period: "Nov 2025 — Present",
    location: "Tezpur University",
    desc: "Participated in hackathons and development sprints, and built a full-stack application using Gemini API.",
    tags: ["Full Stack", "Gemini API", "Hackathons", "Dev Sprints"],
    accent: "#AFCBFF",
  },
];

export default function Experience() {
  const ref = useScrollFade();

  return (
    <section id="experience" className="py-24 px-6 max-w-6xl mx-auto">
      <div ref={ref} className="section-fade">
        {/* Label */}
        

        <h2
          className="display-lg text-ink mb-14"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Experience and{" "}
          <span className="italic text-accent-2">education.</span>
        </h2>
        <div className="flex items-center gap-3 mb-14">
          <span className="label-mono">04 — Experience</span>
          <span className="block flex-1 h-px bg-gradient-to-r from-accent/50 to-transparent max-w-xs" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-[9.5rem] top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent/40 to-transparent" />

          <div className="space-y-12">
            {jobs.map((job, i) => (
              <div key={job.company} className="relative flex flex-col md:flex-row gap-6 md:gap-12">
                {/* Period (desktop) */}
                <div className="hidden md:block w-36 pt-1 text-right flex-shrink-0">
                  <span className="label-mono text-[10px]">{job.period}</span>
                  <div className="mt-1 text-xs text-ink/40">{job.location}</div>
                </div>

                {/* Dot */}
                <div
                  className="absolute left-0 md:left-[8.5rem] top-1.5 w-[18px] h-[18px] rounded-full flex-shrink-0 z-10"
                  style={{
                    background: job.accent,
                    boxShadow: `0 0 0 3px ${job.accent}40`,
                    border: "2px solid var(--bg)",
                  }}
                />

                {/* Card */}
                <div className="pl-9 md:pl-0 md:ml-8 flex-1">
                  {/* Period (mobile) */}
                  <div className="md:hidden mb-2">
                    <span className="label-mono text-[10px]">{job.period}</span>
                    <span className="text-xs text-ink/40 ml-3">{job.location}</span>
                  </div>

                  <div
                    className="paper-card rounded-2xl p-6 hover:shadow-paper-lg transition-all duration-300 group"
                    style={{ background: "rgba(196, 217, 245, 0.35)" }}
                  >
                    

                    <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                      <div>
                        <h3
                          className="font-semibold text-ink"
                          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem" }}
                        >
                          {job.role}
                        </h3>
                        <span className="text-sm text-accent-2 font-medium">{job.company}</span>
                      </div>
                      <span
                        className="text-xs px-2.5 py-1 rounded-full font-medium"
                        style={{ background: job.accent + "50", color: "#4a6f94" }}
                      >
                        {job.period}
                      </span>
                    </div>

                    <p className="text-sm text-ink/60 leading-relaxed mb-4">{job.desc}</p>

                    <div className="flex flex-wrap gap-1.5">
                      {job.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-0.5 rounded-full bg-beige text-accent-2 font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-20 pt-16 border-t border-grid">
          <div className="flex items-center gap-3 mb-8">
            <span className="label-mono text-[10px]">05 — Education</span>
            <span className="block w-16 h-px bg-accent/40" />
          </div>
          <div className="grid md:grid-cols-2 gap-4 w-full">
            <div className="paper-card rounded-2xl p-6" style={{ background: "rgba(196, 217, 245, 0.35)" }}>
              <h3
                className="font-semibold text-ink mb-1"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem" }}
              >
                B.Tech, Computer Science &amp; Engineering
              </h3>
              <p className="text-accent-2 text-base font-medium mb-1">Tezpur University</p>
              <p className="text-sm text-ink/55">2024 — 2028 · CGPA 8.97</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {["Tezpur, Assam", "Expected 2028"].map((c) => (
                  <span key={c} className="text-xs px-2 py-0.5 rounded bg-beige text-accent-2">
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div className="paper-card rounded-2xl p-6" style={{ background: "rgba(196, 217, 245, 0.35)" }}>
              <h3
                className="font-semibold text-ink mb-1"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem" }}
              >
                B.Sc. (Hons), Data Science &amp; AI
              </h3>
              <p className="text-accent-2 text-base font-medium mb-1">IIT Guwahati (Online via Coursera)</p>
              <p className="text-sm text-ink/55">2024 — 2028</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {["Remote", "Expected 2028"].map((c) => (
                  <span key={c} className="text-xs px-2 py-0.5 rounded bg-beige text-accent-2">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
