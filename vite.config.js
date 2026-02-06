import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Update this to match your GitHub repository name
  // If your repo is 'akbar', use '/akbar/'
  // If deploying to root domain (USERNAME.github.io), use '/'
  base: process.env.NODE_ENV === 'production' ? '/akbar/' : '/',
})
