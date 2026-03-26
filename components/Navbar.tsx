"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/useTheme";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

/* ── Pill Toggle ── */
function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={cn(
        "relative flex items-center w-[56px] h-[28px] rounded-full transition-colors duration-400 ease-in-out flex-shrink-0",
        isDark
          ? "bg-[#1E3A5F]"
          : "bg-[#5B88B2]"
      )}
      style={{
        boxShadow: isDark
          ? "0 2px 8px rgba(0,0,0,0.4), inset 0 1px 0 rgba(126,180,212,0.15)"
          : "0 2px 8px rgba(91,136,178,0.45), inset 0 1px 0 rgba(255,255,255,0.25)",
      }}
    >
      {/* Sun icon — left side */}
      <span
        className={cn(
          "absolute left-[7px] flex items-center justify-center transition-opacity duration-300",
          isDark ? "opacity-40" : "opacity-100"
        )}
        aria-hidden
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" />
          <line x1="12" y1="2" x2="12" y2="5" />
          <line x1="12" y1="19" x2="12" y2="22" />
          <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
          <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
          <line x1="2" y1="12" x2="5" y2="12" />
          <line x1="19" y1="12" x2="22" y2="12" />
          <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
          <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
        </svg>
      </span>

      {/* Moon icon — right side */}
      <span
        className={cn(
          "absolute right-[7px] flex items-center justify-center transition-opacity duration-300",
          isDark ? "opacity-100" : "opacity-40"
        )}
        aria-hidden
      >
        <svg width="11" height="11" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </span>

      {/* Sliding knob */}
      <span
        className={cn(
          "absolute top-[3px] w-[22px] h-[22px] rounded-full bg-white shadow-md transition-all duration-300 ease-in-out",
          isDark ? "left-[31px]" : "left-[3px]"
        )}
        style={{
          boxShadow: "0 1px 4px rgba(0,0,0,0.25), 0 0 0 0.5px rgba(0,0,0,0.08)",
        }}
      />
    </button>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "glass border-b border-white/30 py-3"
          : "bg-transparent border-b border-transparent py-5"
      )}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-display text-xl font-semibold tracking-tight text-ink hover:text-accent-2 transition-colors"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Alex<span className="text-accent-2 italic">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="text-sm font-medium text-ink/70 hover:text-ink transition-colors relative group"
              >
                {label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent-2 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-btn inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-ink/80 hover:text-ink"
          >
            <span className="label-mono text-xs">↓</span> Resume
          </a>
        </div>

        {/* Mobile: toggle + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            className="flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={cn("block w-5 h-0.5 bg-ink transition-all duration-200", menuOpen && "rotate-45 translate-y-2")} />
            <span className={cn("block w-5 h-0.5 bg-ink transition-all duration-200", menuOpen && "opacity-0")} />
            <span className={cn("block w-5 h-0.5 bg-ink transition-all duration-200", menuOpen && "-rotate-45 -translate-y-2")} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden glass border-t border-white/20 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {links.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-sm font-medium text-ink/70 hover:text-ink transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/resume.pdf"
                className="inline-flex glass-btn items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-ink/80"
                target="_blank"
                rel="noopener noreferrer"
              >
                ↓ Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
