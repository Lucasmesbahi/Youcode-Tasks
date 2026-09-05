const prompt = require('prompt-sync')();

let Texte1= (prompt('Entrer un 1er caracter : '));
let Texte2= (prompt('Entrer un 2eme caracter : '));

if (Texte1 === Texte2) {
    console.log(`chaînes de caractères : ${Texte1} et ${Texte2}  sont égales `);
}
else {
    console.log(`chaînes de caractères : ${Texte1} et ${Texte2}  sont différentes `)
}