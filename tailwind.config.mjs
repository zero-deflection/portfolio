/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      "light-gray": "#F7F2E7",
      "medium-gray": "#D8D3CD",
      "dark-gray": "#797A7E",
      "light-green": "#EFF5F5",
      "medium-green": "#D6E4E5",
      "dark-green": "#497174",
      "ultra-dark-green": "#00303F",
      brown: "#CDAC81",
      violet: "#991A68",
    },
    extend: {
      gridTemplateColumns: {
        "blog-posts": "repeat(auto-fit, minmax(24ch, 1fr))",
      },
    },
  },
  plugins: [],
};
