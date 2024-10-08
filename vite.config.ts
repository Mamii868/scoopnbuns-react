import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost',
    port: 4000
  },
  preview: {
    host:true,
    strictPort: true,
    port: 4000
  }
})
