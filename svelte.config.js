import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      pages: "../neobrutal-zebar-build",
      assets: "../neobrutal-zebar-build",
      fallback: undefined,
      precompress: false,
      strict: true
    })
  }
};

export default config;
