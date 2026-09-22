const ps = require('prompt-sync');
let num = ps()('Nombre de missions: ');
for (let i = 1; i <= num; i++) 
{
    let score = i * 100
    console.log("Mission " + i + " → Score : " + score);
}