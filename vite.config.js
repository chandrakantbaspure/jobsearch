import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  server: {
    port: 5173,
    open: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "bootstrap/scss/bootstrap";`
      }
    }
  }
});