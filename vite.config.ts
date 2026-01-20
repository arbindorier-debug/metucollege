import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/metucollege/', // <- имя репозитория на GitHub
  plugins: [react()],
});
