//calcul de consomation d'une voiture

const ps = require("prompt-sync")
let Distance = ps()("Entrez la distance parcourue en km: ")
let Carburant = ps()("Entrez la quantité de carburant consommée en litres: ")
let consommation = (Carburant / Distance) * 100
console.log("consommation:",consommation.toFixed(0), "L/100km")