const prompt = require('prompt-sync')();

let a =Number(prompt('Entrer La nombre a : '))
let b =Number(prompt('Entrer La nombre b : '))
let c =Number(prompt('Entrer La nombre c : '))

moyenne = (a * b * c)^(1/3)

console.log('La moyenne géométrique est : ' + moyenne)