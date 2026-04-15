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
        body: ["var(--font-geist-sans)", "var(--font-dm-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
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
        shimmer: "shimmer 2.5s linear infinite",
        float: "float 6s ease-in-out infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "fade-up": "fade-up 0.5s ease-out forwards",
        marquee: "marquee 30s linear infinite",
        "count-up": "count-up 1.5s ease-out forwards",
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
        shimmer: {
          "0%": { "background-position": "-200% 0" },
          "100%": { "background-position": "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.9" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      boxShadow: {
        "glow-teal": "0 0 20px rgba(0,201,177,0.25), 0 0 60px rgba(0,201,177,0.08)",
        "glow-teal-sm": "0 0 12px rgba(0,201,177,0.2)",
        "card-hover": "0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,201,177,0.3)",
        "inner-glow": "inset 0 1px 0 rgba(255,255,255,0.06)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "shimmer-gradient": "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 50%, transparent 100%)",
        "teal-glow": "radial-gradient(ellipse at center, rgba(0,201,177,0.15) 0%, transparent 70%)",
        "hero-mesh": "radial-gradient(at 40% 20%, rgba(0,201,177,0.08) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(99,102,241,0.08) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(0,201,177,0.05) 0px, transparent 50%)",
      },
    },
  },
  plugins: [],
};
export default config;
