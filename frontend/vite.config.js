import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
   base: '/daftar-webiste.github.io/',
  assetsInclude: ['**/*.JPG'],
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {port:5173}
})


