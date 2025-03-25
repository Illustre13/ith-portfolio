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
        obsidian: "#0D1117",
        brand: {
          DEFAULT: "#03a9f4",
          dark: "#0288d1",
          light: "#b3e5fc",
          hover: "#039be5",
        },
        slate: {
          dark: "#1E2432",
          border: "#2A2F3F",
        },
        ivory: "#F4F4F5",
        ash: "#8B8FA8",
        kigali: "#00C896",
        surface: "#FFFFFF",
        "surface-alt": "#F7F8FC",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        "float-particle": "floatParticle 8s ease-in-out infinite",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "grid-drift": "gridDrift 20s linear infinite",
      },
      keyframes: {
        floatParticle: {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)", opacity: "0.3" },
          "33%": { transform: "translateY(-20px) translateX(10px)", opacity: "0.6" },
          "66%": { transform: "translateY(-10px) translateX(-5px)", opacity: "0.4" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        gridDrift: {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(40px, 40px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
