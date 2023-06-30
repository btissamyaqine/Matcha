/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}"
];
export const theme = {
  extend: {},
  container: {
    center: true,
  },
};
export const plugins = [
  require("@tailwindcss/forms"),
];


