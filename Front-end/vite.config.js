/* import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Portfolio",
  plugins: [react()],
}) */

// vite.config.js
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import VitePluginGhPages from 'vite-plugin-gh-pages';

// ...

export default defineConfig({

    base: "/Portfolio",
    plugins: [
    react(),
    reactRefresh(),
    VitePluginGhPages(), // Ajoutez cette ligne
  ],
  // ...
});
