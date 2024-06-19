/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        'top-only': '0 -4px 6px -1px rgba(0, 0, 0, 0.1)',
        'custom-all-except-bottom': '0px 4px 4px -4px rgba(0, 0, 0, 0.1), 4px 0px 4px -4px rgba(0, 0, 0, 0.1), -4px 0px 4px -4px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
