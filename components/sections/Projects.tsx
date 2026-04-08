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
  label: string;
  icon: JSX.Element;
  color: string;
  tabColor: string;
  count: number;

  projects: Project[];
}

const folders: Folder[] = [
  {
    name: "FloodSense Assam",
    label: "ML + Data System",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M2 14c1.2 1 2.4 1.5 3.6 1.5S8 15 9.2 14s2.4-1.5 3.6-1.5 2.4.5 3.6 1.5 2.4 1.5 3.6 1.5S22.8 15 24 14" />
        <path d="M2 18c1.2 1 2.4 1.5 3.6 1.5S8 19 9.2 18s2.4-1.5 3.6-1.5 2.4.5 3.6 1.5 2.4 1.5 3.6 1.5S22.8 19 24 18" />
      </svg>
    ),
    color: "#C4D9F5",
    tabColor: "#A8C8EE",
    count: 1,
    projects: [
      {
        title: "FloodSense Assam",
        description:
          "Real-time flood risk dashboard with ML predictions using ExtraTrees and RandomForest, interactive mapping via Leaflet.js, and Flask API deployment on Render.",
        tech: ["Flask", "ExtraTrees", "RandomForest", "Leaflet.js", "Render"],
        github: "https://github.com/ashlesha-sarma/flood-dashboard-assam",
        live: "https://flood-dashboard-assam.onrender.com",
        status: "Live",
      },
    ],
  },
  {
    name: "SkillMap",
    label: "Graph-Based System",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M8.5 14.5A6.5 6.5 0 1 1 15.5 14.5c-.8.7-1.3 1.6-1.5 2.5h-4c-.2-.9-.7-1.8-1.5-2.5Z" />
      </svg>
    ),
    color: "#F5DCA8",
    tabColor: "#ECC880",
    count: 1,
    projects: [
      {
        title: "SkillMap",
        description:
          "Graph-based learning roadmap generator using topological sorting and TF-IDF search, built with FastAPI backend, Next.js frontend, and React Flow visualizations.",
        tech: ["FastAPI", "Next.js", "React Flow", "TF-IDF", "Topological Sorting"],
        github: "https://github.com/ashlesha-sarma/skillmap",
        live: "https://skillmap-eight.vercel.app/",
        status: "Live",
      },
    ],
  },
  {
    name: "AlgoQuest",
    label: "Full Stack Platform",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="5" cy="6" r="2" />
        <circle cx="19" cy="5" r="2" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="19" cy="16" r="2" />
        <path d="M7 6h10M6.5 7.8l-1 8.4M18 6.8l1 7.2M9 17h8" />
      </svg>
    ),
    color: "#C4EDD4",
    tabColor: "#A0D8B0",
    count: 1,
    projects: [
      {
        title: "AlgoQuest",
        description:
          "Gamified DSA learning platform featuring 5 mini-games (BFS, Stack, Sorting, and more) with PostgreSQL, JWT auth, XP progression, and leaderboard tracking.",
        tech: ["PostgreSQL", "JWT", "JavaScript", "TypeScript"],
        github: "https://github.com/ashlesha-sarma/AlgoQuest-DSA-game",
        live: "https://algo-quest-dsa-game.vercel.app/",
        status: "Live",
      },
    ],
  },
  {
    name: "Mushroom Toxicity Analysis",
    label: "ML Classification Model",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M10 3h4" />
        <path d="M11 3v5l-6 10a2 2 0 0 0 1.7 3h10.6a2 2 0 0 0 1.7-3L13 8V3" />
        <path d="M8 14h8" />
      </svg>
    ),
    color: "#D6CCFF",
    tabColor: "#C0B6F0",
    count: 1,
    projects: [
      {
        title: "Mushroom Toxicity Analysis",
        description:
          "Machine learning classification project for edible vs poisonous mushroom prediction, including Pandas-based preprocessing and Flask deployment.",
        tech: ["Python", "Scikit-learn", "Pandas", "Flask"],
        github: "https://github.com/ashlesha-sarma/mushroom-toxicity-analysis",
        live: "https://mushrom-toxicity-analysis.onrender.com/",
        status: "Live",
      },
    ],
  },
  {
    name: "CampusPaws",
    label: "Full Stack Platform",
    icon: (
      <svg viewBox="0 0 256 256" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M128 130C85 130 50 150 50 185C50 220 90 235 128 220C166 235 206 220 206 185C206 150 171 130 128 130Z" />
        <ellipse cx="95" cy="70" rx="26" ry="46" />
        <ellipse cx="161" cy="70" rx="26" ry="46" />
        <ellipse cx="40" cy="128" rx="24" ry="34" />
        <ellipse cx="216" cy="128" rx="24" ry="34" />
      </svg>
    ),
    color: "#F5C4C4",
    tabColor: "#EEA8A8",
    count: 1,
    projects: [
      {
        title: "CampusPaws",
        description:
          "Full-stack animal welfare and adoption platform with role-based authentication (user and admin), a protected admin panel for managing animals, adoption requests, and donation campaigns. Integrates Razorpay payment gateway with HMAC signature verification and a REST API across 5 route modules backed by SQLite with Multer for image uploads.",
        tech: ["React 18", "Vite", "Node.js", "Express.js", "SQLite", "Razorpay", "Tailwind CSS", "bcryptjs"],
        github: "https://github.com/ashlesha-sarma/campus-paws",
        live: "https://campus-paws.vercel.app",
        status: "Live",
      },
    ],
  },
  {
    name: "TermFolio",
    label: "Interactive CLI Portfolio",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="2" y="3" width="20" height="18" rx="2" />
        <path d="M7 9l3 3-3 3" />
        <path d="M13 15h4" />
      </svg>
    ),
    color: "#C4E8D6",
    tabColor: "#A8D8BC",
    count: 1,
    projects: [
      {
        title: "TermFolio",
        description:
          "Terminal-style interactive portfolio built with React and TypeScript. Features command autocomplete, keyboard history navigation (↑↓), animated text outputs, and a hidden 'sudo hire me' easter egg for recruiters. Fully deployed on Vercel.",
        tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
        github: "https://github.com/ashlesha-sarma/terminal-portfolio-ashlesha",
        live: "https://terminal-portfolio-ashlesha.vercel.app",
        status: "Live",
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
          <span className="label-mono">03 — Projects</span>
          <span className="block flex-1 h-px bg-gradient-to-r from-accent/50 to-transparent max-w-xs" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <h2 className="display-lg text-ink" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Selected work and{" "}
            <span className="italic text-accent-2">builds.</span>
          </h2>
          <p className="text-sm text-ink/50 md:text-right max-w-xs">
            Click any folder to explore projects inside.
          </p>
        </div>

        {/* Folder Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          {folders.map((folder) => (
            <button
              key={folder.name}
              onClick={() => setActiveFolder(folder)}
              className="folder-card project-folder-card text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-2/50 rounded-2xl h-full"
              aria-label={`Open ${folder.name} folder`}
            >
              {/* Folder tab */}
              <div
                className="folder-tab project-folder-tab rounded-tl-lg rounded-tr-lg"
                style={{ background: folder.tabColor }}
              />

              {/* Folder body */}
              <div
                className="project-folder-body rounded-b-2xl rounded-tr-2xl p-6 pt-8 shadow-folder group-hover:shadow-folder-hover h-full min-h-[220px] flex flex-col"
                style={{ background: folder.color }}
              >
                {/* Icon */}
                <div className="text-ink/70 mb-4">{folder.icon}</div>

                {/* Folder name */}
                <h3
                  className="font-semibold text-ink text-base mb-2"
                >
                  {folder.name}
                </h3>
                <p className="inline-flex items-center text-[13px] font-bold tracking-wide text-ink/70 px-3.5 py-1.5 rounded-full bg-white/45 backdrop-blur-md border border-white/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.55),0_2px_6px_rgba(44,62,80,0.12)] mt-1 mb-2">
                  {folder.label}
                </p>

                <div className="flex items-center justify-end mt-auto pt-3">
                  <span className="text-ink/30 text-xs">→</span>
                </div>
              </div>
            </button>
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
