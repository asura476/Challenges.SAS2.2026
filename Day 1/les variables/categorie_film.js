// categorie d'un film

"use strict"
const ps = require("prompt-sync")
let duree = ps()("Entrez la durée du film en minutes: ")
if (duree < 60) {
    console.log("Catégorie : court métrage")
}
else if (duree >= 60 && duree <= 120) {
    console.log("Catégorie : film standard")
}
else if (duree > 120) {
    console.log("Catégorie : film long")
}