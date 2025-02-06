/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",  // Covers all JS/TS/JSX/TSX/MDX files inside src
    "./components/**/*.{js,ts,jsx,tsx}", // Covers components directory
    "./app/**/*.{js,ts,jsx,tsx}", // If using Next.js App Router
    "./pages/**/*.{js,ts,jsx,tsx}", // If using Next.js Pages Router
    "./public/**/*.html", // Covers any HTML files in public
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
