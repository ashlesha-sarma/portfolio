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
        bg: "#FAFAF7",
        grid: "#DCEBFF",
        accent: "#AFCBFF",
        "accent-2": "#6B8FB3",
        ink: "#1A1A1A",
        muted: "#BFC7D5",
        "folder-blue": "#C8DEFF",
        "folder-purple": "#D6CCFF",
        "folder-green": "#C4EDD4",
        "folder-amber": "#FFE4B5",
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'DM Mono'", "monospace"],
      },
      boxShadow: {
        "glass": "0 2px 24px rgba(175,203,255,0.18), 0 1px 0 rgba(255,255,255,0.8) inset",
        "glass-lg": "0 8px 48px rgba(107,143,179,0.2), 0 1px 0 rgba(255,255,255,0.9) inset",
        "folder": "0 4px 16px rgba(107,143,179,0.15), 0 1px 3px rgba(0,0,0,0.08)",
        "folder-hover": "0 12px 32px rgba(107,143,179,0.25), 0 2px 8px rgba(0,0,0,0.1)",
        "paper": "0 2px 12px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)",
        "paper-lg": "0 8px 32px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.05)",
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(#DCEBFF 1px, transparent 1px), linear-gradient(90deg, #DCEBFF 1px, transparent 1px)",
        "grid-dots": "radial-gradient(circle, #AFCBFF 1px, transparent 1px)",
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
