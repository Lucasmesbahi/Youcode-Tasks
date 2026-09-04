const prompt = require('prompt-sync')();

function additionner(a , b ) {
    return a + b;
}

let resultat = additionner(5 , 8);
console.log(`La somme est : ${resultat}`);
