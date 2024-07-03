/** @type {import('tailwindcss').Config} */
import fluid, { extract } from "fluid-tailwind";
import plugin from "tailwindcss/plugin";

export default {
  content: {
    files: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    extract,
  },
  theme: {
    extend: {
      colors: {
        "primary-color": "#e1b7ff",
        "primary-dark": "#b44dfe",
        "primary-light": "#f2e2fe",
        "secondary-color": "#eaf3f5",
        "light-color": "#fdfdfd",
        "dark-color": "#353535",
      },
      boxShadow: {
        "custom-shadow": "15px 15px 0px 0px var(--primaryColor)",
      },
    },
  },
  plugins: [
    fluid,
    plugin(({ addComponents }) => {
      const components = {
        
      };
      addComponents(components);
    }),
  ],
};
