const ps = require('prompt-sync');
let num = ps()('Depart: ');
while (num >= 0) {
    console.log(num);
    num--;
}
console.log('Décollage !');