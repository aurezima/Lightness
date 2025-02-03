// app.js

// Importation de la fonction generatePalette depuis utils.js
import { generatePalette } from "./modules/utils";

// Exemple d'utilisation de la fonction avec une couleur et un intervalle de 10
const palette = generatePalette("#99aa23", 10);

// Affichage du résultat dans la console pour vérification
console.log(palette);
