import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#12161C",
        panel: "#1B212B",
        border: "#2A323F",
        ink: "#E7E9ED",
        muted: "#8B93A1",
        amber: "#E8A33D",
        teal: "#4FD1C5",
        alert: "#E5484D",
      },
      fontFamily: {
        mono: ["var(--font-mono)", "monospace"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        "fade-in": "fadeIn 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
