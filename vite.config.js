import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src', // Définir 'src' comme racine
  publicDir: '../public',  // Assure que `public/` est bien pris en compte
  build: {
    copyPublicDir: true,     // Copie automatiquement `public/` vers `dist/`
    target: 'es6',
    outDir: '../dist', // Répertoire de sortie
    emptyOutDir: true, // Nettoie le dossier avant chaque build
  },
});
