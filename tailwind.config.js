/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        second: "var(--second)",
        darkcolor: "var(--dark)",
      },
      boxShadow: {
        "3xl": "#304ffe4a 0px 4px 15px ",
      },
    },
  },
  plugins: [],
};
