const ps = require('prompt-sync')()
let num = +ps("enter the number you want to add: ")
const tab = [1, 2, 3, 4, 5]
tab [tab.length] = num
console.log(tab)