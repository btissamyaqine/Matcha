/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}"
];
export const theme = {
  extend: {},
  screens: {
    'tablet': '640px',
    // => @media (min-width: 640px) { ... }

    'laptop': '1024px',
    // => @media (min-width: 1024px) { ... }

    'desktop': '1280px',
    // => @media (min-width: 1280px) { ... }
  },
  backgroundSize: {
    'auto': 'auto',
    'cover': 'cover',
    'contain': 'contain',
    '50%': '40%',
    '16': '3rem',
  }
};
export const plugins = [
  require("@tailwindcss/forms"),
];


