const ps = require('prompt-sync')
let num1 = +ps()("Entrez le premier nombre: ")
let num2 = +ps()("Entrez le deuxième nombre: ")
let operation = ps()("Entrez l'opération (+, -, *, /): ")
switch (operation)
{
    case "+":
        console.log("Résultat : " + (num1 + num2))
        break
    case "-":
        console.log("Résultat : " + (num1 - num2))
        break
    case "*":
        console.log("Résultat : " + (num1 * num2))
        break
    case "/":
        if (num2 === 0) {
            console.log("Erreur: Division par zéro")
        } else {
            console.log("Résultat : " + (num1 / num2))
        }
        break
    default:
        console.log("Opération invalide")
}