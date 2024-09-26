import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		prerender: {
			handleHttpError: ({ referenceType, message }) => {
				if (referenceType === 'linked') {
					// Ignora link esterni (es: www.linkedin.com)
					return;
				}

				throw new Error(message);
			}
		}
	}
};

export default config;
