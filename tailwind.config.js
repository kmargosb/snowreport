/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      colors: {
        "primary": "#1D4EDF",
        "primary2": "#B9CBDF",
        "secondary2": "#7D3738",
        "secondary": "#3ec9a7",
        "text-secondary3": "#616668",
        "snowWhite": "#f2e8c4"
      }
    },
  },
  plugins: [],
};
