"use client";

import { useScrollFade } from "@/hooks/useScrollFade";

export default function About() {
  const ref = useScrollFade();

  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <div ref={ref} className="section-fade">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-14">
          <span className="label-mono">§ 01 — About</span>
          <span className="block flex-1 h-px bg-gradient-to-r from-accent/50 to-transparent max-w-xs" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Paper note card */}
          <div className="relative">
            {/* Tape decoration */}
            <div
              className="tape tape-sm"
              style={{ top: "-10px", left: "50%", transform: "translateX(-50%) rotate(1.5deg)" }}
              aria-hidden
            />

            <div className="paper-card rounded-2xl p-8 pt-10">
              <div className="display-lg text-ink mb-6 leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}>
                Building things<br />that matter.
              </div>
              <p className="text-ink/65 leading-relaxed mb-5">
                I&apos;m Alex — a full stack developer and AI/ML engineer with a
                passion for building intelligent systems that feel effortless to
                use. I bridge the gap between cutting-edge ML research and
                production-ready software.
              </p>
              <p className="text-ink/65 leading-relaxed">
                Currently focused on LLM applications, agent architectures, and
                the tools that make AI genuinely useful. I believe in clean
                abstractions, thoughtful APIs, and interfaces that respect the
                user.
              </p>

              <div className="mt-8 pt-6 border-t border-grid flex flex-wrap gap-2">
                {["San Francisco, CA", "Open to remote", "Available Q3 2025"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-accent/20 text-accent-2 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Focus areas */}
          <div className="space-y-5">
            <h3 className="display-md text-ink" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Focus Areas
            </h3>

            {[
              {
                icon: "◈",
                title: "AI/ML Engineering",
                desc: "LLMs, RAG pipelines, fine-tuning, agent systems, and productionizing ML models at scale.",
              },
              {
                icon: "◇",
                title: "Full Stack Development",
                desc: "React, Next.js, Node.js, Python — end-to-end from design system to deployment.",
              },
              {
                icon: "◉",
                title: "Systems Design",
                desc: "Distributed systems, API design, microservices, and infrastructure-as-code.",
              },
              {
                icon: "◈",
                title: "Developer Tooling",
                desc: "CLIs, SDKs, internal platforms, and developer experience improvements.",
              },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="flex gap-4 items-start p-4 rounded-xl hover:bg-accent/10 transition-colors group"
              >
                <span className="text-accent-2 text-lg mt-0.5 group-hover:scale-110 transition-transform">
                  {icon}
                </span>
                <div>
                  <h4 className="font-semibold text-ink mb-1">{title}</h4>
                  <p className="text-sm text-ink/60 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
