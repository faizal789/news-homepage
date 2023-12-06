/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "soft-orange-primary": "hsl(35, 77%, 62%)",
        "soft-red-primary": "hsl(5, 85%, 63%)",
        "off-white-neutral": "hsl(36, 100%, 99%)",
        "grayish-blue-neutral": "hsl(233, 8%, 79%)",
        "dark-grayish-blue-neutral": "hsl(236, 13%, 42%)",
        "very-dark-blue-neutral": "hsl(240, 100%, 5%)",
      },
      fontFamily: {
        ["sans"]: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
