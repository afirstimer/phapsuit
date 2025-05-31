/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        text: "rgb(var(--color-text) / <alpha-value>)",
        background: "rgb(var(--color-background) / <alpha-value>)",
        card: "rgb(var(--color-card) / <alpha-value>)",
      },
      boxShadow: {
        neo: "var(--shadow-neobrutalism)",
      },
      borderRadius: {
        small: "var(--radius-small)",
        medium: "var(--radius-medium)",
        large: "var(--radius-large)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        display: ["Archivo Black", "system-ui", "-apple-system", "sans-serif"],
      },
      animation: {
        "neo-bounce": "bounce 1.5s infinite",
        "neo-rotate": "rotate 10s linear infinite",
      },
      keyframes: {
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      gridTemplateColumns: {
        "auto-fill-100": "repeat(auto-fill, minmax(100px, 1fr))",
        "auto-fill-200": "repeat(auto-fill, minmax(200px, 1fr))",
        "auto-fill-300": "repeat(auto-fill, minmax(300px, 1fr))",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
