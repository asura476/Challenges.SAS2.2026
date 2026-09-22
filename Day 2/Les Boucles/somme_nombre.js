const ps = require("prompt-sync");
let N = +ps()("N = ");
let somme = 0;
for (let i = 1; i <= N; i++)
{
    somme += i;
}
console.log("somme = " + somme);