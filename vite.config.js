import { defineConfig } from 'vite';
import version from 'vite-plugin-package-version';
import injectHTML from 'vite-plugin-html-inject';

export default defineConfig({
  base: 'https://bookbinder.scottlabs.io/',
  test: {
    environment: 'jsdom',
  },
  plugins: [version(), injectHTML()],
});
