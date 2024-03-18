/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color1: "#02AABD",
        color2: "#00CDAC",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};


// #662D8C → #ED1E79
//#02AABD → #00CDAC