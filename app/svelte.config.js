import adapter from "@sveltejs/adapter-static";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: "../public",
			fallback: "index.html",
		}),
		prerender: { entries: [] }
	},
};

export default config;
