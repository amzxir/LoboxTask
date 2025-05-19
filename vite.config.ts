import { defineConfig, type AliasOptions } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
      types: path.resolve(__dirname, "./src/types"),
    } as AliasOptions,
  },
  plugins: [react()],
});
