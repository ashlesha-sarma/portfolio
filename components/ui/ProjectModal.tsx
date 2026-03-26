"use client";

import { useEffect } from "react";
import { cn } from "@/lib/utils";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  status?: string;
}

interface ProjectModalProps {
  folderName: string;
  folderColor: string;
  projects: Project[];
  onClose: () => void;
}

export default function ProjectModal({
  folderName,
  folderColor,
  projects,
  onClose,
}: ProjectModalProps) {
  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal
      aria-label={folderName}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-ink/20 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />

      {/* Modal panel */}
      <div
        className="glass-modal relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl animate-fade-in-up"
        style={{ animationDuration: "0.3s" }}
      >
        {/* Header */}
        <div
          className="sticky top-0 z-10 flex items-center justify-between px-7 py-5 border-b border-white/50"
          style={{ background: "rgba(250,250,247,0.9)", backdropFilter: "blur(16px)" }}
        >
          <div className="flex items-center gap-3">
            {/* macOS dots */}
            <div className="flex gap-1.5">
              <button
                onClick={onClose}
                className="w-3 h-3 rounded-full bg-red-400/80 hover:bg-red-500 transition-colors"
                aria-label="Close"
              />
              <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
              <div className="w-3 h-3 rounded-full bg-green-400/70" />
            </div>
            <div
              className="h-4 w-px bg-ink/15 mx-1"
              aria-hidden
            />
            <h2
              className="font-semibold text-ink"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem" }}
            >
              {folderName}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="text-ink/40 hover:text-ink transition-colors text-lg"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Project list */}
        <div className="p-7 space-y-5">
          {projects.map((proj) => (
            <div
              key={proj.title}
              className="paper-card rounded-2xl p-6 hover:shadow-paper-lg transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-3">
                <h3
                  className="font-semibold text-ink text-lg"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {proj.title}
                </h3>
                {proj.status && (
                  <span
                    className={cn(
                      "text-xs px-2.5 py-0.5 rounded-full font-medium",
                      proj.status === "Live"
                        ? "bg-green-100 text-green-700"
                        : proj.status === "WIP"
                        ? "bg-amber-100 text-amber-700"
                        : "bg-accent/20 text-accent-2"
                    )}
                  >
                    {proj.status}
                  </span>
                )}
              </div>

              <p className="text-sm text-ink/60 leading-relaxed mb-4">
                {proj.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {proj.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full border border-accent/40 text-accent-2 font-mono font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              {(proj.github || proj.live) && (
                <div className="flex gap-3 pt-3 border-t border-grid">
                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-btn inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium text-ink/80"
                    >
                      <span>↗</span> GitHub
                    </a>
                  )}
                  {proj.live && (
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-btn inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium text-ink/80"
                    >
                      <span>⊙</span> Live
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
