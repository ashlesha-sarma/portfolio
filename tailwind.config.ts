import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#FAF3EA",
        "bg-alt": "#F0E7D5",
        "cream-light": "#F8F3EA",
        beige: "#E6D8C7",
        grid: "#C9DBF5",
        accent: "#AFCBFF",
        "accent-2": "#5B88B2",
        ink: "#1A1A1A",
        "ink-secondary": "#4A5568",
        muted: "#BFC7D5",
        midnight: "#122C4F",
        // Folder colors — warm-shifted
        "folder-blue": "#C4D9F5",
        "folder-purple": "#D6CCFF",
        "folder-green": "#C4EDD4",
        "folder-amber": "#F5DCA8",
        "folder-rose": "#F5D5C8",
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'DM Mono'", "monospace"],
      },
      boxShadow: {
        "glass": "0 2px 24px rgba(91,136,178,0.12), 0 1px 0 rgba(255,255,255,0.85) inset",
        "glass-lg": "0 8px 48px rgba(91,136,178,0.18), 0 1px 0 rgba(255,255,255,0.9) inset",
        "folder": "0 4px 16px rgba(91,136,178,0.14), 0 1px 3px rgba(0,0,0,0.07)",
        "folder-hover": "0 12px 32px rgba(91,136,178,0.22), 0 2px 8px rgba(0,0,0,0.09)",
        "paper": "0 2px 12px rgba(0,0,0,0.05), 0 1px 3px rgba(0,0,0,0.035)",
        "paper-lg": "0 8px 32px rgba(0,0,0,0.07), 0 2px 8px rgba(0,0,0,0.045)",
        "btn-primary": "0 4px 16px rgba(91,136,178,0.35)",
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(rgba(201,219,245,0.65) 1px, transparent 1px), linear-gradient(90deg, rgba(201,219,245,0.65) 1px, transparent 1px)",
        "grid-dots": "radial-gradient(circle, #C9DBF5 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid": "40px 40px",
        "grid-dots": "24px 24px",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "tape-in": {
          "0%": { opacity: "0", transform: "rotate(-3deg) scaleX(0)" },
          "100%": { opacity: "1", transform: "rotate(-3deg) scaleX(1)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s ease forwards",
        "fade-in": "fade-in 0.5s ease forwards",
        "float": "float 4s ease-in-out infinite",
      },
      backdropBlur: {
        "xs": "4px",
      },
    },
  },
  plugins: [],
};
export default config;
