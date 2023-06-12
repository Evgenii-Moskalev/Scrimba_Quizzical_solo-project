import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Scrimba_Quizzical_solo-project/',
  plugins: [react()],
})
