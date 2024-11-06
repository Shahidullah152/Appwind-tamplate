/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "HeroBG-img": "url('./assets/images/hero/background-image.jpg')",
      },
    },
  },
  plugins: [],
};
