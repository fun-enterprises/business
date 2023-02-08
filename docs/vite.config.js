import { SearchPlugin } from "vitepress-plugin-search";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    SearchPlugin({
      previewLength: 62,
      buttonLabel: "Search",
      placeholder: "Search docs",
    })
  ]
});