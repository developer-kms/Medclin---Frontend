/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "cor-1": "var(--cor-1)",
        "cor-2": "var(--cor-2)",
        "cor-4": "var(--cor-4)",
        "cor-5": "var(--cor-5)",
        "cor-6": "var(--cor-6)",
        "cor-7": "var(--cor-7)",
        "cor-8": "var(--cor-8)",
      },
      boxShadow: {
        "sombra-daora": "var(--sombra-daora)",
        "sombra-forte": "var(--sombra-forte)",
        "sombra-padr-o": "var(--sombra-padr-o)",
      },
    },
  },
  plugins: [],
};