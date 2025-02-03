import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src', // Définir 'src' comme racine
  build: {
    target: 'es6',
    outDir: '../dist', // Répertoire de sortie
    emptyOutDir: true, // Nettoie le dossier avant chaque build
  },
});