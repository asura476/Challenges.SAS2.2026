let tab = ["Aassef", "Amina", "Karim", "Salma", "Hicham"];
function bubbleSort(tab)
{
    for(i = 0; i < tab.length; i++)
    {
        for(j = 0; j < tab.length - i; j++)
        {
            if(tab[j] > tab[j + 1])
            {
                let temp = tab[j]
                tab[j] = tab[j + 1]
                tab[j + 1] = temp
            }
        }
    }
    return tab
}
console.log(bubbleSort(tab))