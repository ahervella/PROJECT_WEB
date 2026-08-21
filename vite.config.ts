import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import csp from 'vite-plugin-csp-guard'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    csp({
      algorithm: "sha256",
      dev: { run: false },
      policy: {
        "script-src": ["'self'"],
        "style-src": ["'self'", "'unsafe-inline'"],
        "img-src": ["'self'", "data:", "https:"],
        "font-src": ["'self'", "data:"],
        "connect-src": ["'self'"],
        "frame-src": ["https://www.youtube.com"],
        "object-src": ["'none'"],
        "base-uri": ["'self'"],
        "form-action": ["'self'"],
      },
    }),
  ],
  resolve: {
    alias: {
      '~': path.resolve(import.meta.dirname, './'),
      '$src': path.resolve(import.meta.dirname, './src'),
      '$assets': path.resolve(import.meta.dirname, './src/assets'),
      '$comps' : path.resolve(import.meta.dirname, './src/components')
    },
  },
  base: '/',
  build: {
    outDir: './build', // Change this to your desired path
  },
})
