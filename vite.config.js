import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
  plugins: [svelte()],
  build: {
    lib: {
      entry: "src/App.svelte",
      name: "TabsFunctionality",
      fileName: "tabs-functionality",
      formats: ["iife"], // Output as a standalone JavaScript file
    },
  },
});