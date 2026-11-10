import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#D71920",
          "red-dark": "#A80F18",
          "red-light": "#FF444D",
          white: "#FFFFFF",
          ice: "#F8F9FA",
          graphite: "#252525",
          "gray-light": "#E9ECEF",
          "gray-subtle": "#F1F3F5",
          dark: "#141518",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(0, 0, 0, 0.05)",
        card: "0 10px 30px -5px rgba(0, 0, 0, 0.08)",
        "card-hover": "0 20px 40px -10px rgba(215, 25, 32, 0.15)",
        red: "0 10px 25px -5px rgba(215, 25, 32, 0.4)",
        "red-lg": "0 15px 35px -5px rgba(215, 25, 32, 0.5)",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { transform: "scale(1)", boxShadow: "0 0 0 0 rgba(37, 211, 102, 0.7)" },
          "50%": { transform: "scale(1.05)", boxShadow: "0 0 0 14px rgba(37, 211, 102, 0)" },
        },
      },
      animation: {
        pulseGlow: "pulseGlow 2.5s infinite",
      },
    },
  },
  plugins: [],
};
export default config;
