function extraireChaine(tab, x, y)
{
    let tab1 = ""
    for(i = x; i < y; i++)
    {
        tab1 += tab[i]
    }
    return tab1
}
console.log(extraireChaine("Javascript", 1, 3))