const prompt = require('prompt-sync')();

let longueur =Number(prompt('Entrer La longueur  : '))
let largeur =Number(prompt('Entrer La largeur  : '))

Surface = longueur * largeur
console.log('Surface de un rectangle est  ' + Surface )