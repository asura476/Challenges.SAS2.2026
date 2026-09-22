function extraireChaine(tab, x, y)
{
    let tab1 = ""
    for(i = 0; i < tab.length; i++)
    {
        if(x)
        {
            tab1 = tab[x]
        }
    }
    return tab1
}
console.log(extraireChaine("Javascript", 0, 4))