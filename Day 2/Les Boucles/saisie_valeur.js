const ps = require('prompt-sync')()
let sum = 0
let num
let count = -1
while (num != 0)
{
    num = +ps("Saisie : ")
    sum += num
    count++
}
console.log('Nombre de valeurs : ' + count)
console.log('Somme : ' + sum)