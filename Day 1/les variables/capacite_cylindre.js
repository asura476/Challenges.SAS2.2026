// calcul de la capacite d'un reservoire cylindrique

"use strict"
const ps = require("prompt-sync")
let rayon = ps()("Entrez le rayon du réservoir en mètres: ");
let hauteur = ps()("Entrez la hauteur du réservoir en mètres: ");
let volume = rayon * rayon * 3.14159 * hauteur
console.log("Volume: " + volume.toFixed(4) + " m³")