/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
      colors: {
        primary: "#403F3F",
        dark: "#706F6F",
      },
    },
  },
  daisyui: {
    theme: [],
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    components: true,
    variants: true,
    utilities: true,
    plugins: true,
    corePlugins: true,
  },
  plugins: [require("daisyui")],
};

