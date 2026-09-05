const prompt = require('prompt-sync')();

let Texte = prompt("Entrer la phrase ou mot : ");

let i = 0;
while (Texte[i] !== undefined) {
    i++;
}
console.log(i);