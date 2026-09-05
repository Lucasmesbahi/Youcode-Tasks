const prompt = require('prompt-sync')();

let n = Number(prompt("Entrez un nombre à 4 chiffres : "));

let chiffre1 = Math.floor(n / 1000);
let chiffre2 = Math.floor(n / 100) % 10;
let chiffre3 = Math.floor(n / 10) % 10;
let chiffre4 = Math.floor(n % 10);
let inverse = chiffre4 * 1000 + chiffre3 * 100 + chiffre2 * 10 + chiffre1;

console.log("Le nombre inversé est :", inverse);