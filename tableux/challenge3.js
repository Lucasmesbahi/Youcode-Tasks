const prompt = require('prompt-sync')();

let n = Number(prompt("Entrez le nombre d'éléments :"));
let somme = 0;

for (let i = 0; i < n; i++) {
    let element = Number(prompt(`Entrez l'élément ${i + 1} : `));
    somme += element;
}

console.log("La somme totale est : " + somme);