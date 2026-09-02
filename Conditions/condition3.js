const prompt = require('prompt-sync')();

let nombre1=Number (prompt('Entrer n1 : '));
let nombre2=Number (prompt('Entrer n2 : '));

if (nombre1 === nombre2) {
    let k = nombre1 * 3;
    console.log(`les deux valeurs sont identiques alors leur somme est : ${k}`);
}
else {
    let p  = nombre1 * nombre2
    console.log(`la valeur de n1 x n2 est : ${p}` );
}
