import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pearl: "#ffffff",
        lavender: "#f3eefa",
        lilac: "#e8ddf2",
        violet: "#9273ad",
        sage: "#a8bba3",
        plum: "#40334a",
        mauve: "#85768e",
        rose: "#e8c5d5",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        sans: ["var(--font-sans)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
