import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command, isPreview }) => ({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || (command === 'build' || isPreview ? '/77-portfolio/' : '/'),
  build: { outDir: 'dist', emptyOutDir: true },
}));
