import { defineConfig } from "vite";

export default defineConfig({
	build: {
		lib: {
			entry: "./lib/index.ts",
			name: "autoComplete",
			fileName: "index",
		},
	},
});
