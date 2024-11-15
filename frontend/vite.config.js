import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Make Vite listen on all interfaces
    port: 5173,        // Ensure the port matches the one in your Dockerfile
  }
})
