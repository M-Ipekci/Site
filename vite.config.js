// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@splinetool/react-spline': '/actual/relative/path/to/your/src/@splinetool/react-spline',
    },
  },
  optimizeDeps: {
    include: ['src/components/Hero.jsx'],
  },
});
