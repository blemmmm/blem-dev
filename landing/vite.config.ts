import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export const aliases = {
  "@assets": resolve(__dirname, "./src/assets"),
  "@layouts": resolve(__dirname, "./src/layouts"),
  "@pages": resolve(__dirname, "./src/pages"),
  "@components": resolve(__dirname, "./src/components"),
  "@router": resolve(__dirname, "./src/router"),
  "@shared": resolve(__dirname, "./src/shared"),
  "@theme": resolve(__dirname, "./src/theme"),
  "@styles": resolve(__dirname, "./src/styles"),
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: { alias: aliases },
});
