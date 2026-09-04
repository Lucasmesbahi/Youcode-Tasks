const prompt = require('prompt-sync')();

let x1 =Number(prompt('Entrer La nombre x1 : '))
let x2 =Number(prompt('Entrer La nombre x2 : '))
let y1 =Number(prompt('Entrer La nombre y1 : '))
let y2 =Number(prompt('Entrer La nombre y2 : '))
let z1 =Number(prompt('Entrer La nombre y1 : '))
let z2 =Number(prompt('Entrer La nombre y2 : '))

Distance =  Math.sqrt((x2 - x1)^(2) + (y2 - y1)^(2) + (z2 - z1)^(2))

console.log('la distance entre deux points dans un espace 3D est : ' + Distance)