function compterVoyelles(tab)
{
    let compteur = 0
    for (let i = 0; i < tab.length; i++)
        {
            if(tab[i] === "a" || tab[i] === "e" || tab[i] === "u" || tab[i] === "o" || tab[i] === "i" || tab[i] === "y")
            {
                compteur++
            }
            else if(tab[i] === "A" || tab[i] === "E" || tab[i] === "U" || tab[i] === "O" || tab[i] === "I" || tab[i] === "Y")
            {
                compteur++
            }
}
return compteur
}
console.log("there are " + compterVoyelles("developpeur") + " vowels")