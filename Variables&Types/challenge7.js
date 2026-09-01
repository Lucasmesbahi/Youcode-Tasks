const prompt = require('prompt-sync')();

let a = Number(prompt('Entrer le 1er nombre : '));
let b = Number(prompt('Entrer le 2ème nombre : '));
let c = Number(prompt('Entrer le 3ème nombre : '));

let moyenne = (a * 2 + b * 3 + c * 5) / (2 + 3 + 5);

console.log('La moyenne pondérée est :', moyenne);