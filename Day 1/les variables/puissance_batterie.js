// calcul de puissance de batterie
"use strict"
const ps = require("prompt-sync")
let tension = +ps()("Entrez la tension de la batterie en volts: ")
let intensité = +ps()("Entrez l'intensité de la batterie en ampères: ")
let temps = +ps()("Entrez le temps de fonctionnement de la batterie en heures: ")
let puissance = tension * intensité * temps
console.log("Énergie: " + puissance + " Wh")