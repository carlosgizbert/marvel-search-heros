import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    proxy: {
      '/api/marvel/images': {
        target: 'https://i.annihil.us',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/marvel/, ''),
      },
    },
  },
});