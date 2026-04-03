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
        navy: {
          DEFAULT: "#0B1628",
          dark: "#070E1A",
          panel: "#0F1E35",
          mid: "#132040",
          light: "#1A2D52",
        },
        teal: {
          DEFAULT: "#00C9B1",
          dark: "#00B5A0",
          muted: "rgba(0,201,177,0.08)",
        },
        gold: "#F59E0B",
        muted: "#94A3B8",
        "card-border": "#1E3A5F",
      },
      fontFamily: {
        display: ["var(--font-bricolage)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1.5rem",
          sm: "1.5rem",
          lg: "1.5rem",
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1160px",
          "2xl": "1160px",
        },
      },
      spacing: {
        "4.5": "1.125rem",
        "13": "3.25rem",
      },
      animation: {
        slideDown: "slideDown 0.2s ease-out",
        slideUp: "slideUp 0.2s ease-out",
      },
      keyframes: {
        slideDown: {
          "0%": { height: "0", opacity: "0" },
          "100%": { height: "var(--radix-accordion-content-height)", opacity: "1" },
        },
        slideUp: {
          "0%": { height: "var(--radix-accordion-content-height)", opacity: "1" },
          "100%": { height: "0", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
