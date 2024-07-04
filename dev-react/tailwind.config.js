/** @type {import('tailwindcss').Config} */
import fluid, { extract } from "fluid-tailwind";

export default {
  content: {
    files: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    extract,
  },
  theme: {
    extend: {
      colors: {
        "primary-color": "#553eae",
        "secondary-color": "#FFECEC",
        "bg-blue" : "#553EAE",
        "bg-grey" : "#E6E8E7"
      },
      boxShadow: {
        "custom-shadow": "15px 15px 0px 0px var(--primaryColor)",
      },
    },
  },
  plugins: [
    fluid,

  ],
};
