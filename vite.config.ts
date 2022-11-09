import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(() => {
  return {
    build: { sourceMap: true },
    plugins: [qwikCity(), qwikVite(), tsconfigPaths(), vanillaExtractPlugin()],
  };
});
