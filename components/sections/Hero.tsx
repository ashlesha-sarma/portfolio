"use client";

import { useEffect, useState } from "react";

const roles = ["Full Stack Developer", "AI/ML Engineer", "Creative Builder"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = roles[roleIndex];
    let timer: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < target.length) {
      timer = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === target.length) {
      timer = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timer = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayed, deleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 pt-28 pb-16 max-w-6xl mx-auto"
    >
      {/* Scrapbook element — tape top left */}
      <div
        className="tape"
        style={{ top: "5rem", left: "2rem", transform: "rotate(-6deg)", opacity: 0.7 }}
        aria-hidden
      />

      {/* Label */}
      <div className="flex items-center gap-3 mb-8 animate-fade-in" style={{ animationDelay: "0.1s", animationFillMode: "both", opacity: 0 }}>
        <span className="label-mono">Portfolio — 2025</span>
        <span className="block w-8 h-px bg-accent-2/50" />
        <span className="star-sticker" aria-hidden>★</span>
      </div>

      {/* Main heading */}
      <div
        className="mb-6 animate-fade-in-up"
        style={{ animationDelay: "0.2s", animationFillMode: "both", opacity: 0 }}
      >
        <h1 className="display-xl text-ink leading-none mb-2">
          Alex<br />
          <span className="italic text-accent-2">Chen.</span>
        </h1>
      </div>

      {/* Animated role */}
      <div
        className="mb-8 h-10 animate-fade-in-up"
        style={{ animationDelay: "0.4s", animationFillMode: "both", opacity: 0 }}
      >
        <p className="display-md text-ink/60 font-display italic">
          {displayed}
          <span className="inline-block w-0.5 h-7 bg-accent-2 ml-1 align-middle animate-pulse" />
        </p>
      </div>

      {/* Tagline */}
      <p
        className="max-w-md text-ink/60 text-lg leading-relaxed mb-12 animate-fade-in-up"
        style={{ animationDelay: "0.55s", animationFillMode: "both", opacity: 0 }}
      >
        I craft intelligent, elegant digital experiences — where systems
        thinking meets creative precision.
      </p>

      {/* CTAs */}
      <div
        className="flex flex-wrap gap-4 animate-fade-in-up"
        style={{ animationDelay: "0.7s", animationFillMode: "both", opacity: 0 }}
      >
        <a
          href="#projects"
          className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium"
        >
          View Projects
          <span>→</span>
        </a>
        <a
          href="#contact"
          className="btn-secondary inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium"
        >
          Get in touch
        </a>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-6 flex flex-col items-center gap-2 animate-fade-in"
        style={{ animationDelay: "1.2s", animationFillMode: "both", opacity: 0 }}
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-accent-2/50" />
        <span className="label-mono text-[10px] -rotate-90 origin-center translate-x-3">Scroll</span>
      </div>

      {/* Wax seal decorative */}
      <div
        className="absolute bottom-16 right-8 md:right-16 animate-float wax-seal"
        aria-hidden
      >
        AC
      </div>
    </section>
  );
}
