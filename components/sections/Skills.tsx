"use client";

import { useScrollFade } from "@/hooks/useScrollFade";

const skills = [
  {
    category: "Languages",
    color: "folder-blue",
    tabColor: "#A8C8EE",
    icon: "{ }",
    items: ["TypeScript", "Python", "Rust", "Go", "SQL"],
    desc: "Strong foundations across systems and scripting languages.",
  },
  {
    category: "Frontend",
    color: "folder-purple",
    tabColor: "#C0B6F0",
    icon: "◻",
    items: ["React", "Next.js", "Framer Motion", "Tailwind CSS", "Three.js"],
    desc: "Crafting performant, beautiful user interfaces.",
  },
  {
    category: "Backend & Cloud",
    color: "folder-green",
    tabColor: "#A8DDB8",
    icon: "⬡",
    items: ["Node.js", "FastAPI", "PostgreSQL", "Redis", "AWS", "Docker"],
    desc: "Scalable APIs and infrastructure that doesn't break.",
  },
  {
    category: "AI / ML",
    color: "folder-amber",
    tabColor: "#ECC880",
    icon: "⊛",
    items: ["PyTorch", "LangChain", "OpenAI API", "HuggingFace", "RAG", "Fine-tuning"],
    desc: "From research to production ML systems.",
  },
  {
    category: "Tools & Ops",
    color: "folder-blue",
    tabColor: "#A8C8EE",
    icon: "⚙",
    items: ["Git", "GitHub Actions", "Terraform", "Kubernetes", "Vercel", "Datadog"],
    desc: "DevOps and tooling for smooth delivery.",
  },
  {
    category: "Design",
    color: "folder-purple",
    tabColor: "#C0B6F0",
    icon: "✦",
    items: ["Figma", "Framer", "Design Systems", "Accessibility", "Motion Design"],
    desc: "Design thinking meets engineering precision.",
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
          <span className="label-mono">§ 02 — Toolbox</span>
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
            <div key={category} className="folder-card group">
              {/* Folder tab */}
              <div
                className="folder-tab rounded-tl-md rounded-tr-md"
                style={{ background: tabColor }}
              />

              {/* Folder body */}
              <div
                className="rounded-b-2xl rounded-tr-2xl p-6 shadow-folder group-hover:shadow-folder-hover transition-all duration-300"
                style={{ background: colorMap[color] ?? "#C8DEFF" }}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-2xl text-ink/50">{icon}</span>
                  <span className="label-mono text-[10px]">{items.length} tools</span>
                </div>

                <h3 className="font-semibold text-ink text-base mb-2">{category}</h3>
                <p className="text-xs text-ink/55 leading-relaxed mb-4">{desc}</p>

                <div className="flex flex-wrap gap-1.5">
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
