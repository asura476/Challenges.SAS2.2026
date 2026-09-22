const ps = require("prompt-sync");
let N = +ps()("Nombre = ");
let multiplication = 1;
for (let i = 1; i <= 10; i++)
{
    multiplication = i * N;
    console.log(N + " x " + i + " = " + multiplication);
}