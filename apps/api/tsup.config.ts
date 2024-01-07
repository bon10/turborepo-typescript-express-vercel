import { defineConfig, type Options } from "tsup";

export default defineConfig((options: Options) => ({
  entryPoints: ["api/index.ts"],
  clean: false,
  format: ["cjs"],
  outDir: "api",
  ...options,
}));
