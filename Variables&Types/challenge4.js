const prompt = require('prompt-sync')();

let kilometresparheure=Number (prompt('Entrer la vitesse en kilomètres par heure : '));
let vitesseparsecond = kilometresparheure * 0.27778;

console.log(`La vitesse par second est : ${vitesseparsecond} m/s`);