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
        whatsapp: {
          DEFAULT: "#25D366",
          dark: "#128C7E",
          hover: "#1EBE5A",
        },
        neutral: {
          dark: "#2C2C2C",
          mid: "#525252",   // upgraded from #7A7A7A → now passes WCAG AA (7:1 on white)
          surface: "#F8FAFC",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
