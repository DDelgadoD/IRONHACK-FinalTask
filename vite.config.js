import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: process.end.NODE_ENV == 'producción' ? '/IRONHACK-FinalTask' : '/' ,
  build: {outDir: 'docs'}
})
