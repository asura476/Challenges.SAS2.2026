// calcul du score d'un examen

"use strict"
const ps = require("prompt-sync")
let score1 = +ps()("Entrez le score du premier examen: ")
let score2 = +ps()("Entrez le score du deuxième examen: ")
let score3 = +ps()("Entrez le score du troisième examen: ")
let score4 = +ps()("Entrez le score du quatrième examen: ")
let score_total = score1 + score2 + score3 + score4
let moyenne = score_total / 4
console.log("Score total: " + score_total)
console.log("Moyenne: " + moyenne)
