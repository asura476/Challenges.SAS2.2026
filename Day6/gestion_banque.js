let account =
{
    owner: "Tayeb",
    balance: 5000,
    type: "saving",
};
console.log("account balance before deposite: " + account.balance)
const ps = require('prompt-sync')()
let num = +ps("how much money do you want to deposite: ")
let num1 = +ps("how much money do you need: ")
console.log("account balance after deposite: " + (account.balance + num))
account.balance += num
account.retirer = num1
if (account.balance - account.retirer < 0)
{
    console.log("solde insufisant")
}
else if (account.balance - account.retirer >= 0)
{
    console.log("solde restant: " + (account.balance - account.retirer) + " DH")
}