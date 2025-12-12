import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    hmr: {
      clientPort: 443, 
    },
    allowedHosts: [
<<<<<<< HEAD
      'be42914fd7df.ngrok-free.app',  // Solo permitir domino del backend
=======
      '9ac1a9ac1e82.ngrok-free.app',  // Solo permitir domino del backend
>>>>>>> 3ba1d143ba0c1fdab7309cb55ed369554f725765
      'localhost' 
    ]
  }
})