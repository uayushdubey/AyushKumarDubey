import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repositoryName = process.env.VITE_REPO_NAME || '<repo-name>';

export default defineConfig({
  base: `/${repositoryName}/`,
  plugins: [react()],
});
