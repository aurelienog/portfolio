import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [svgr(), react(), tailwindcss()], 
  base: "/", // Asegura que el deploy se sirva desde la raíz
  build: {
    outDir: "dist",
  },
})
