const ps = require("prompt-sync")
let number = ps()("Enter a number: ")

if (number > 0) {
    console.log("Le nombre est positif.")
}
else if (number < 0) {
    console.log("Le nombre est négatif.")
}
else {
    console.log("Le nombre est égal à zéro.")
}