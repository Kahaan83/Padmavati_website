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
        brand: {
          primary: "#0077B6",
          secondary: "#00B4D8",
          accent: "#90BE6D",
          deep: "#2D6A4F",
          navy: "#1B4F72",
        },
        neutral: {
          dark: "#2C2C2C",
          mid: "#7A7A7A",
          surface: "#F8FAFC",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
