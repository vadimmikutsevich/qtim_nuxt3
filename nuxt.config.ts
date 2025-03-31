import tailwindcss from "@tailwindcss/vite";
import svgLoader from "vite-svg-loader";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css", "~/assets/css/theme.css"],
  vite: {
    plugins: [tailwindcss(), svgLoader()],
  },
  nitro: {
    preset: "static",
  },
});
