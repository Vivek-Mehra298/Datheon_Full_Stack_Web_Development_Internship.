import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#070b1b",
        bg2: "#0c1230",
        surface: "rgba(17, 25, 58, .66)",
        surfaceSolid: "#121a3c",
        line: "rgba(173, 195, 255, .14)",
        textMain: "#f5f7ff",
        muted: "#9ca8cf",
        cyan: "#42ddff",
        violet: "#906bff",
        pink: "#ff68ca",
        lime: "#b8ff69"
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"]
      },
      keyframes: {
        pingSoft: {
          "70%": { boxShadow: "0 0 0 8px rgba(184,255,105,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(184,255,105,0)" }
        },
        float: {
          "50%": { transform: "translateY(-18px) rotate(4deg)" }
        },
        cardFloat: {
          "50%": { transform: "translateY(10px)" }
        }
      },
      animation: {
        pingSoft: "pingSoft 1.8s infinite",
        float: "float 6s ease-in-out infinite",
        cardFloat: "cardFloat 5s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
