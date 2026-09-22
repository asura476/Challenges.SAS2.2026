const ps = require("prompt-sync")
let age = ps()("Entrez votre âge: ")
if (age >= 18) {
console.log("Accès autorisé")
}
else {
console.log("Accès refusé")
}