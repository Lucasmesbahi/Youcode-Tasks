const prompt = require('prompt-sync')();

let a=Number (prompt('Entrer La number a : '));
let b=Number (prompt('Entrer La number b : '));
let c=Number (prompt('Entrer La number c : '));

Delta= ((b^2) - 4 * a * c );
x1= (-b - Math.sqrt(Delta) ) / (2 * a);
x2= (-b + Math.sqrt(Delta) ) / (2 * a);
x3= -(b) / (2 * a);
if (Delta > 0) {
    console.log(`l'équation admet deux solutions réelles distinctes : x1= ${x1} et x2= ${x2}`);
}
else if (Delta === 0) {
    console.log(`l'équation admet une solution réelle double : x=${x3}`);
}
else {
    console.log('léquation n admet pas de solution réelle.')
}