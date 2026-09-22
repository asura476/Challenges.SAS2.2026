const ps = require("prompt-sync")
let note = +ps()("Entrez votre note: ")
if (note < 10) {
    console.log("Echec")
}
else if (note >= 10 && note < 12) {
    console.log("Passable")
}
else if (note >= 12 && note < 14) {
    console.log("Assez bien")
}
else if (note >= 14 && note < 16) {
    console.log("Bien")
}
else if (note >= 16 && note < 18) {
    console.log("Très bien")
}
else {
    console.log("Excellent")
}