// modules/utils.js

// Importation de la librairie color-convert pour effectuer la conversion des couleurs
import * as convert from "color-convert";

/**
 * Génère une palette de couleurs à partir d'une couleur hexadécimale donnée.
 * @param {string} hex - Code couleur hexadécimal.
 * @param {number} interval - Intervalle entre chaque palier de luminosité (par défaut 10).
 * @returns {Array} Un tableau de couleurs HSL où la teinte et la saturation restent fixes,
 * mais la luminosité varie de 0 à 100 selon l'intervalle défini.
 */
export const generatePalette = (hex, interval = 10) => {
  // Initialise un tableau vide pour stocker les couleurs générées
  const colors = [];

  // Convertit la couleur hexadécimale en HSL et extrait uniquement la teinte (h) et la saturation (s)
  const [h, s] = convert.hex.hsl(hex);

  // Boucle de 0 à 100 avec un pas défini par l'intervalle
  for (let i = 0; i <= 100; i += interval) {
    // Ajoute chaque variation de luminosité au tableau
    colors.push([h, s, i]);
  }
  
  // Retourne le tableau des couleurs générées
  return colors;
};

//console.log("#ff0000", 20)