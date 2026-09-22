let count = 0
function compterCaracteres(tab){
    for(char in tab)
    {
        count = Number(char) + 1
    }
    return count
}
console.log(compterCaracteres("bbbbbbbb"))