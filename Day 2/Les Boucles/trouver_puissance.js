const ps = require('prompt-sync')();
let base = ps('Base: ');
let expo = ps('Exposant: ')
let result = 1
let i = 0
while (i <= expo - 1)
{
    result *= base
    i++
}
 console.log('Résultat : ' + result)