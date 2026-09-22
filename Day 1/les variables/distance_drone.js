// calcul de distance parcourue par un drone

let x1 = 1
let y1 = 2
let z1 = 3
let x2 = 4
let y2 = 6
let z2 = 3
let distance = Distance = ((x2-x1)* (x2-x1) + (y2-y1) * (y2-y1) + (z2-z1) * (z2-z1)) ** 0.5
console.log("Distance: " + distance)