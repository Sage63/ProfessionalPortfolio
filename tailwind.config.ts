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
        bg: "#0d0d0d",
        surface: "#141414",
        surface2: "#1c1c1c",
        border: "#262626",
        coral: "#ff5533",
        gold: "#f0c040",
        ink: "#f0ede6",
        muted: "#6a6a6a",
        dim: "#3a3a3a",
      },
      fontFamily: {
        display: ["'Bebas Neue'", "sans-serif"],
        serif: ["'Instrument Serif'", "serif"],
        sans: ["'Geist'", "sans-serif"],
        mono: ["'Geist Mono'", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
