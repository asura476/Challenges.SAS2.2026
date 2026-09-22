console.log(`
1 → Pizza
2 → Burger
3 → Tacos
4 → Salade`)
const ps = require('prompt-sync')()
let num = +ps('Choix: ')
let quantite = +ps('Quantité: ')
switch(num)
{
    case 1:
        console.log('Plat : Pizza')
        console.log('Prix unitaire : 60 DH')
        console.log('Sous-total: ' + quantite * 60 + ' DH')
        if (quantite * 60 >= 200)
        {
            console.log("Réduction : " + (quantite * 60 * 0.1) + " DH")
            console.log("Total à payer: " + (quantite * 60 - quantite * 60 * 0.1) + " DH")
        }
        break
    case 2:
        console.log('Plat : Burger')
        console.log('Prix unitaire : 45 DH')
        console.log('Sous-total: ' + quantite * 45 + ' DH')
        if (quantite * 45 >= 200)
        {
            console.log("Réduction : " + (quantite * 45 * 0.1) + " DH")
            console.log("Total à payer: " + (quantite * 45 - quantite * 45 * 0.1) + " DH")
        }
        break
    case 3:
        console.log('Plat : Tacos')
        console.log('Prix unitaire : 40 DH')
        console.log('Sous-total: ' + quantite * 40 + ' DH')
        if (quantite * 40 >= 200)
        {
            console.log("Réduction : " + (quantite * 40 * 0.1) + " DH")
            console.log("Total à payer: " + (quantite * 40 - quantite * 40 * 0.1) + " DH")
        }
        break
    case 4:
        console.log('Plat : Salad')
        console.log('Prix unitaire : 30 DH')
        console.log('Sous-total: ' + quantite * 30 + ' DH')
        if (quantite * 30 >= 200)
        {
            console.log("Réduction : " + (quantite * 30 * 0.1) + " DH")
            console.log("Total à payer: " + (quantite * 30 - quantite * 30 * 0.1) + " DH")
        }
        break
    default:
        console.log('Plat : Not found')
}