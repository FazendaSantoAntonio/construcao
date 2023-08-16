/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        light: "#FEEFDD",
        primary: "#382619", // 240,86,199
        secondary: "#d99d56",
        tertiary:"#d76e54",
      },
    },
  },
  plugins: [],
}
