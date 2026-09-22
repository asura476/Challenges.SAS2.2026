const ps = require('prompt-sync')
let montant = +ps()("Entrez le montant de votre commande: ")
let livraison = 40
if (montant >= 500) {
    console.log("Livraison gratuite")
}
else if (montant < 500) {
    console.log("Frais de livraison: 40 DH")
    montant = montant + livraison
    console.log("Total a payer: " + montant + " DH.")
}