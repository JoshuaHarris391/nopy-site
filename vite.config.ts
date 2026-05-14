/// <reference types="vitest" />
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Repo: JoshuaHarris391/nopy-site → published at https://joshuaharris391.github.io/nopy-site/
// Override with VITE_BASE=/ for custom-domain deploys.
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '')
  return {
    base: env.VITE_BASE ?? '/nopy-site/',
    plugins: [react(), tailwindcss()],
    build: {
      target: 'es2022',
      cssMinify: 'lightningcss',
    },
    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: ['./src/test/setup.ts'],
      css: false,
    },
  }
})
