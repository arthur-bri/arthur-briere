import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
// @ts-ignore
import { imagetools } from 'vite-imagetools'

export default defineConfig({
  plugins: [vue(), svgLoader(), imagetools()],
  optimizeDeps: {
    exclude: ['tailwindcss'],
  },
})
