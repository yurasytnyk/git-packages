import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      name: "git-package",
      fileName: (format) => `git-package.${format}.js`,
    },
  },
  plugins: [dts()],
});
