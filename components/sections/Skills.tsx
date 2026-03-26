"use client";

import { useScrollFade } from "@/hooks/useScrollFade";

const skills = [
  {
    category: "Languages",
    color: "folder-blue",
    tabColor: "#A8C8EE",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-100">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    items: ["Python", "C++", "SQL", "JavaScript", "TypeScript"],
    desc: "Core programming languages used across application and ML workflows.",
  },
  {
    category: "Frontend",
    color: "folder-purple",
    tabColor: "#C0B6F0",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-100">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <path d="M12 17v4M8 21h8"/>
        <path d="m19 13.5 1.5-1.5 1.5 1.5-1.5 1.5z"/>
      </svg>
    ),
    items: ["React.js", "Next.js 14", "Tailwind CSS", "HTML", "CSS", "React Flow"],
    desc: "Modern frontend development for interactive, responsive interfaces.",
  },
  {
    category: "Backend",
    color: "folder-green",
    tabColor: "#A8DDB8",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-100">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <circle cx="12" cy="10" r="3"/>
        <path d="M12 7v1M12 12v1M9.5 10h1M13.5 10h1M12 17v4M8 21h8"/>
      </svg>
    ),
    items: ["Flask", "FastAPI", "Node.js", "Express.js"],
    desc: "API development and server-side application architecture.",
  },
  {
    category: "Databases",
    color: "folder-amber",
    tabColor: "#ECC880",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-100">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M3 5V19A9 3 0 0 0 21 19V5"/>
        <path d="M3 12A9 3 0 0 0 21 12"/>
      </svg>
    ),
    items: ["PostgreSQL", "SQLite"],
    desc: "Relational database design and integration for production applications.",
  },
  {
    category: "ML / Data",
    color: "folder-blue",
    tabColor: "#A8C8EE",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-100">
        <circle cx="4" cy="6" r="1.5"/><circle cx="4" cy="12" r="1.5"/><circle cx="4" cy="18" r="1.5"/>
        <circle cx="12" cy="6" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="18" r="1.5"/>
        <circle cx="20" cy="6" r="1.5"/><circle cx="20" cy="12" r="1.5"/><circle cx="20" cy="18" r="1.5"/>
        <path d="M5.5 6l5 0 M5.5 12l5 0 M5.5 18l5 0 M13.5 6l5 0 M13.5 12l5 0 M13.5 18l5 0"/>
        <path d="M5.5 6l5 5.5 M5.5 12l5-5.5 M5.5 12l5 5.5 M5.5 18l5-5.5"/>
        <path d="M13.5 6l5 5.5 M13.5 12l5-5.5 M13.5 12l5 5.5 M13.5 18l5-5.5"/>
      </svg>
    ),
    items: ["Scikit-learn", "PyTorch", "Pandas", "NumPy", "Feature Engineering", "TF-IDF"],
    desc: "Machine learning and data processing for practical predictive systems.",
  },
  {
    category: "Tools",
    color: "folder-purple",
    tabColor: "#C0B6F0",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-1000">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    items: ["Git", "Docker", "Jupyter", "Render"],
    desc: "Development and deployment tools for efficient delivery cycles.",
  },
];


const colorMap: Record<string, string> = {
  "folder-blue": "#C4D9F5",
  "folder-purple": "#D6CCFF",
  "folder-green": "#C4EDD4",
  "folder-amber": "#F5DCA8",
};

export default function Skills() {
  const ref = useScrollFade();

  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <div ref={ref} className="section-fade">
        {/* Label */}
        <div className="flex items-center gap-3 mb-14">
          <span className="label-mono">02 — Tech Stack</span>
          <span className="block flex-1 h-px bg-gradient-to-r from-accent/50 to-transparent max-w-xs" />
        </div>

        <div className="mb-10">
          <h2 className="display-lg text-ink" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            The craft, the stack,{" "}
            <span className="italic text-accent-2">the tools.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map(({ category, color, tabColor, icon, items, desc }) => (
            <div key={category} className="folder-card skill-folder-card group h-full">
              {/* Folder tab */}
              <div
                className="folder-tab skill-folder-tab rounded-tl-md rounded-tr-md"
                style={{ background: tabColor }}
              />

              {/* Folder body */}
              <div
                className="skill-folder-body rounded-b-2xl rounded-tr-2xl p-6 shadow-folder group-hover:shadow-folder-hover transition-all duration-300 h-full min-h-[250px] flex flex-col"
                style={{ background: colorMap[color] ?? "#C8DEFF" }}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-2xl text-ink/50">{icon}</span>
                </div>

                <h3 className="font-semibold text-ink text-base mb-2">{category}</h3>
                <p className="text-xs text-ink/55 leading-relaxed mb-4">{desc}</p>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-2.5 py-1 rounded-full bg-white/55 text-ink/70 font-medium border border-white/40"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
