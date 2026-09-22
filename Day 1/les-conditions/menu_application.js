console.log(`
1 → Afficher le profil
2 → Afficher les paramètres
3 → Afficher les notifications
4 → Se déconnecter`)
const ps = require("prompt-sync")
let choix = ps()("Entrez votre choix: ")
switch (choix) {
    case "1":
        console.log("Ouverture du profil...")
        break
    case "2":
        console.log("Ouverture des paramètres...")
        break
    case "3":
        console.log("Ouverture des notifications...")
        break
    case "4":
        console.log("Déconnexion...")
        break
    default:
        console.log("Choix invalide.")
}