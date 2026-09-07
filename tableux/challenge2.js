const prompt = require('prompt-sync')();

let numbers = Number(prompt('How many elements does the array have? '));
let array = [];

for (let i = 0; i < numbers; i++) {
    let valeur = prompt(`Entrer l'element ${i + 1} : `);
    array.push(valeur);
}

console.log(`votre tableau : ${array}`);