"use client";

import { useScrollFade } from "@/hooks/useScrollFade";

export default function About() {
  const ref = useScrollFade();

  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <div ref={ref} className="section-fade">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-14">
          <span className="label-mono">01 — About</span>
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
                Building products<br />that solve real problems.
              </div>
              <p className="text-ink/65 leading-relaxed mb-5">
                I&apos;m Ashlesha Sarma, a Full Stack Developer and AI/ML Engineer
                focused on building reliable applications that combine strong
                software fundamentals with practical machine learning.
              </p>
              <p className="text-ink/65 leading-relaxed">
                I work across modern frontend systems, backend APIs, and ML
                workflows to deliver end-to-end products - from data
                preprocessing and model development to intuitive user
                experiences.
              </p>

              <div className="mt-8 pt-6 border-t border-grid flex flex-wrap gap-2">
                {["Assam, India", "Open to internships", "Available for collaboration"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-beige text-accent-2 font-medium"
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
                icon: "◉",
                title: "AI/ML Engineering",
                desc: "Applied machine learning using Scikit-learn and PyTorch with strong preprocessing and feature engineering workflows.",
              },
              {
                icon: "◉",
                title: "Full Stack Development",
                desc: "Building complete products with React, Next.js, FastAPI, Flask, Node.js, and Express.js.",
              },
              {
                icon: "◉",
                title: "Data-Driven Applications",
                desc: "Developing interactive tools that integrate algorithms, data pipelines, and clean APIs.",
              },
              {
                icon: "◉",
                title: "Deployment & Tooling",
                desc: "Version control, containerization, notebooks, and lightweight deployment using Git, Docker, Jupyter, and Render.",
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
