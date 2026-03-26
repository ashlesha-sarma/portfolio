"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

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
          Ashlesha<span className="text-accent-2 italic">.</span>
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
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-btn inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-ink/80 hover:text-ink"
          >
            <span className="label-mono text-xs">↓</span> Resume
          </a>
        </div>

        {/* Mobile: hamburger */}
        <div className="md:hidden flex items-center gap-3">
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
