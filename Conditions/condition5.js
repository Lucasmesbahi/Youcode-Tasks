const prompt = require('prompt-sync')();

let a = Number(prompt("Entrer nombre d'annees : "));

let Mois = a * 12;
let Jours = a * 365;
let Heures = Jours * 24;
let Minutes = Heures * 60;
let Secondes = Minutes * 60;

console.log('Mois : ' + Mois);
console.log('Jours : ' + Jours);
console.log('Heures : ' + Heures);
console.log('Minutes : ' + Minutes);
console.log('Secondes : ' + Secondes);
