import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
const path = require("path");
import { resolve } from "path";

export default defineConfig({
  alias: {
    "@": path.resolve(__dirname, "./src"),
  },
  plugins: [vue()],
});
