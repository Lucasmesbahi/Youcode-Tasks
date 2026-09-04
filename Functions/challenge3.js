const prompt = require('prompt-sync')();

function maximum(a, b) {
    return a < b ? b : a;
}

let a = Number(prompt("Entrez le premier nombre : "));
let b = Number(prompt("Entrez le deuxième nombre : "));

console.log("Le maximum est :", maximum(a, b));