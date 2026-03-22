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
        background: "#1e1e1e",
        surface: "#2d2d2d",
        border: "#3e3e3e",
        primary: {
          DEFAULT: "#007acc",
          hover: "#005a9e",
        },
        text: {
          primary: "#d4d4d4",
          secondary: "#858585",
        },
        success: "#4ec9b0",
        warning: "#ce9178",
        error: "#f48771",
        code: {
          keyword: "#569cd6",
          string: "#ce9178",
          function: "#dcdcaa",
          comment: "#6a9955",
        },
      },
      fontFamily: {
        mono: ["Consolas", "Monaco", "Courier New", "monospace"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
