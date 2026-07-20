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
        bg: {
          primary: "#050505",
          secondary: "#0A0A0A",
          surface: "#111111",
          elevated: "#161616",
          inset: "#0D0D0D",
        },
        accent: {
          green: "#00C805",
          "green-hover": "#00A804",
          cyan: "#00D4FF",
        },
        vixal: {
          green: "#00C805",
          cyan: "#00D4FF",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["JetBrains Mono", "SF Mono", "Fira Code", "monospace"],
      },
      fontSize: {
        display: ["76px", { lineHeight: "1.02", letterSpacing: "-0.04em", fontWeight: "900" }],
        h1: ["52px", { lineHeight: "1.08", letterSpacing: "-0.03em", fontWeight: "900" }],
        h2: ["40px", { lineHeight: "1.1", letterSpacing: "-0.03em", fontWeight: "900" }],
        h3: ["24px", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" }],
        h4: ["20px", { lineHeight: "1.3", letterSpacing: "-0.02em", fontWeight: "700" }],
        "body-lg": ["18px", { lineHeight: "1.65" }],
        body: ["16px", { lineHeight: "1.6" }],
        "body-sm": ["14px", { lineHeight: "1.55" }],
        caption: ["12px", { lineHeight: "1.4", letterSpacing: "0.02em", fontWeight: "500" }],
        overline: ["11px", { lineHeight: "1.3", letterSpacing: "0.08em", fontWeight: "600" }],
        micro: ["10px", { lineHeight: "1.3", letterSpacing: "0.02em", fontWeight: "600" }],
      },
      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        "2xl": "32px",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "orb-drift": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -20px) scale(1.05)" },
          "66%": { transform: "translate(-20px, 15px) scale(0.95)" },
        },
        "typing-bounce": {
          "0%, 60%, 100%": { transform: "translateY(0)", opacity: "0.4" },
          "30%": { transform: "translateY(-4px)", opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-ring": {
          "0%, 100%": { opacity: "0.3", transform: "scale(1)" },
          "50%": { opacity: "0.1", transform: "scale(1.2)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "orb-drift": "orb-drift 25s ease-in-out infinite",
        "orb-drift-reverse": "orb-drift 30s ease-in-out infinite reverse",
        "typing-bounce": "typing-bounce 1.4s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        "pulse-ring": "pulse-ring 3s ease-in-out infinite",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};

export default config;
