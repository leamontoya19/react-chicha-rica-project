import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Puerto deseado
  },
  build: {
    outDir: 'dist', // Carpeta de salida, puedes cambiarla según tu preferencia
  },
});

