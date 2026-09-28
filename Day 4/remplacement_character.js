function remplacerCaractere(tab, x, y)
{
    let str = ""
    for (let i = 0; i < tab.length; i++)
    {
        if(tab[i] === x)
        {
            str += y
        }
        else
        {
            str += tab[i]
        }
    }
    return str
}
console.log(remplacerCaractere("ismail", "i", "5"))