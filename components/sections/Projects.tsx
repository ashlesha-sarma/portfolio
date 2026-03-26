"use client";

import { useState } from "react";
import { useScrollFade } from "@/hooks/useScrollFade";
import ProjectModal from "@/components/ui/ProjectModal";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  status?: string;
}

interface Folder {
  name: string;
  icon: string;
  color: string;
  tabColor: string;
  count: number;
  projects: Project[];
}

const folders: Folder[] = [
  {
    name: "Web Projects",
    icon: "◻",
    color: "#C8DEFF",
    tabColor: "#AACAFF",
    count: 3,
    projects: [
      {
        title: "Luminary — SaaS Dashboard",
        description:
          "A full-featured analytics dashboard for SaaS businesses, with real-time charts, team collaboration, and subscription management. Built for performance and scale.",
        tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Tailwind"],
        github: "https://github.com",
        live: "https://example.com",
        status: "Live",
      },
      {
        title: "Chronicle CMS",
        description:
          "Headless CMS with rich text editing, version history, multi-language support, and a GraphQL API. Designed for editorial teams working at speed.",
        tech: ["React", "Node.js", "GraphQL", "MongoDB", "AWS S3"],
        github: "https://github.com",
        status: "Live",
      },
      {
        title: "Forma — Design System",
        description:
          "An open-source React component library with 60+ accessible components, Storybook docs, and full Figma parity. Used by 3 production apps.",
        tech: ["React", "TypeScript", "Storybook", "Radix UI", "CSS Variables"],
        github: "https://github.com",
        live: "https://example.com",
        status: "Open Source",
      },
    ],
  },
  {
    name: "AI / ML Projects",
    icon: "⊛",
    color: "#FFE4B5",
    tabColor: "#FFD08A",
    count: 3,
    projects: [
      {
        title: "DocuMind — RAG Pipeline",
        description:
          "Enterprise document Q&A system using RAG over 100k+ documents. Achieves 91% retrieval accuracy with a custom chunking and embedding strategy.",
        tech: ["Python", "LangChain", "OpenAI", "Pinecone", "FastAPI", "Next.js"],
        github: "https://github.com",
        live: "https://example.com",
        status: "Live",
      },
      {
        title: "CodeReview Agent",
        description:
          "AI-powered GitHub bot that reviews PRs, catches bugs, suggests improvements, and leaves structured comments. Integrated with 20+ repos.",
        tech: ["Python", "GPT-4", "GitHub API", "LangGraph", "Docker", "Redis"],
        github: "https://github.com",
        status: "Live",
      },
      {
        title: "SentimentScope",
        description:
          "Fine-tuned BERT model for multi-label sentiment analysis on customer reviews. 94.2% F1 score, deployed as a REST API with sub-50ms latency.",
        tech: ["PyTorch", "HuggingFace", "BERT", "FastAPI", "AWS Lambda"],
        github: "https://github.com",
        status: "Open Source",
      },
    ],
  },
  {
    name: "Tools & CLIs",
    icon: "⚙",
    color: "#C4EDD4",
    tabColor: "#A8DEB8",
    count: 2,
    projects: [
      {
        title: "Flick — Git Workflow CLI",
        description:
          "A smart Git CLI that automates branch naming, PR creation, and release notes using AI. Reduces manual overhead for solo devs and teams.",
        tech: ["Rust", "GitHub API", "OpenAI", "Clap", "Tokio"],
        github: "https://github.com",
        status: "Open Source",
      },
      {
        title: "Capsule — Env Manager",
        description:
          "Zero-config environment variable manager with encryption, team sharing, and CI integration. A simpler alternative to Doppler for small teams.",
        tech: ["Go", "AES-256", "CLI", "GitHub Actions", "Docker"],
        github: "https://github.com",
        live: "https://example.com",
        status: "WIP",
      },
    ],
  },
  {
    name: "Experiments",
    icon: "✦",
    color: "#D6CCFF",
    tabColor: "#C0B4FF",
    count: 2,
    projects: [
      {
        title: "Lattice — Generative Art",
        description:
          "A creative coding project generating parametric geometric art using Rust + WASM. Exports high-res SVGs and supports real-time parameter tweaking.",
        tech: ["Rust", "WASM", "WebGL", "Canvas API", "SVG"],
        github: "https://github.com",
        live: "https://example.com",
        status: "Live",
      },
      {
        title: "ToneType — AI Music",
        description:
          "Experimental interface that generates ambient music from typed text via fine-tuned MIDI transformer. Built for focus and creative flow states.",
        tech: ["Python", "PyTorch", "MIDI", "Transformer", "Web Audio API"],
        github: "https://github.com",
        status: "WIP",
      },
    ],
  },
];

export default function Projects() {
  const ref = useScrollFade();
  const [activeFolder, setActiveFolder] = useState<Folder | null>(null);

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <div ref={ref} className="section-fade">
        {/* Label */}
        <div className="flex items-center gap-3 mb-14">
          <span className="label-mono">§ 03 — Experiments</span>
          <span className="block flex-1 h-px bg-gradient-to-r from-accent/50 to-transparent max-w-xs" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <h2 className="display-lg text-ink" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Work I&apos;m{" "}
            <span className="italic text-accent-2">proud of.</span>
          </h2>
          <p className="text-sm text-ink/50 md:text-right max-w-xs">
            Click any folder to explore projects inside.
          </p>
        </div>

        {/* Folder Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {folders.map((folder) => (
            <button
              key={folder.name}
              onClick={() => setActiveFolder(folder)}
              className="folder-card text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-2/50 rounded-2xl"
              aria-label={`Open ${folder.name} folder`}
            >
              {/* Folder tab */}
              <div
                className="folder-tab rounded-tl-lg rounded-tr-lg"
                style={{ background: folder.tabColor }}
              />

              {/* Folder body */}
              <div
                className="rounded-b-2xl rounded-tr-2xl p-6 pt-8 shadow-folder group-hover:shadow-folder-hover"
                style={{ background: folder.color }}
              >
                {/* Icon */}
                <div className="text-3xl text-ink/30 mb-4">{folder.icon}</div>

                {/* Folder name */}
                <h3
                  className="font-semibold text-ink mb-1 text-sm leading-snug"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem" }}
                >
                  {folder.name}
                </h3>

                <div className="flex items-center justify-between mt-4">
                  <span className="label-mono text-[10px]">
                    {folder.count} project{folder.count !== 1 ? "s" : ""}
                  </span>
                  <span className="text-ink/30 text-xs">→</span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Stats row */}
        <div className="mt-14 grid grid-cols-3 gap-4 md:gap-8 max-w-lg">
          {[
            { value: "10+", label: "Projects shipped" },
            { value: "3", label: "Open source libs" },
            { value: "∞", label: "Experiments running" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div
                className="text-3xl font-semibold text-ink mb-1"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {value}
              </div>
              <div className="text-xs text-ink/50">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeFolder && (
        <ProjectModal
          folderName={activeFolder.name}
          folderColor={activeFolder.color}
          projects={activeFolder.projects}
          onClose={() => setActiveFolder(null)}
        />
      )}
    </section>
  );
}
