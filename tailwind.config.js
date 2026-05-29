/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "#1a1a1a",
        primary: "#000000",
        "primary-foreground": "#ffffff",
        secondary: "#f5f5f5",
        border: "#e5e5e5",
        "muted-foreground": "#666666",
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        mono: ['Menlo', 'Monaco', 'monospace'],
      },
    },
  },
  plugins: [],
}