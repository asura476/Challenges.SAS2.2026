const ps = require("prompt-sync");
let num = ps()("Participants :");
for (let i = 1; i <= num; i++)
{
    console.log("Participant numéro " + i);
}