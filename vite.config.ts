import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { existsSync } from 'node:fs'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    __RESUME_AVAILABLE__: JSON.stringify(
      existsSync(new URL('./public/Laxman_Kumar_Battula_Resume.pdf', import.meta.url)),
    ),
  },
})
