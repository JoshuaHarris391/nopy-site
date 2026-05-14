/// <reference types="vitest" />
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Default base is '/' (Vercel, custom domains, local dev).
// Set VITE_BASE=/nopy-site/ to publish at https://joshuaharris391.github.io/nopy-site/.
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '')
  return {
    base: env.VITE_BASE ?? '/',
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
