const prompt = require('prompt-sync')();

let tempCelsius = parseFloat(prompt("Entrez la température en C°:"));
let tempkelvin = tempCelsius + 273.15;

console.log('La temp en kelvin est : ' + tempkelvin + 'K');
