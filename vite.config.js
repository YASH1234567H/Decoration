import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  base:'/Decoration/',
  build: { rollupOptions: { output: { manualChunks: { motion: ['framer-motion'], gsap: ['gsap'], swiper: ['swiper'] } } } },
})
