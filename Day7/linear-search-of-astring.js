function linearSearch(tab, value)
{
    for(let i = 0; i < tab.length; i++)
    {
        if(tab[i] === value)
        {
        return i
        }
    }
    return "doesn't exist"
}
const ps = require('prompt-sync')()
let num = ps("enter the number you wanna find: ")
let tab = ["pomme", "banane", "cerise", "mangue", "kiwi"];
console.log("the index of the element you are looking for is : " + linearSearch(tab, num))