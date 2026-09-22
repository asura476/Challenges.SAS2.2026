const ps = require("prompt-sync");
let num = +ps()("N = ");
let somme = 1
for (let i = 1; i <= num; i++)
{
    somme *= i;
}
console.log(num + "! = " + somme);