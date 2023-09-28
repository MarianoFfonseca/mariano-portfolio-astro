/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "#101213",
        text: "#BFBFBF",
        title: "#C7C7C7",
        primary: "#97B4FF",
        bgButton: "#272727",
        points: "#272727",
        bgImage: "#1A2235",
        hovBgBtn: "#404040",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
