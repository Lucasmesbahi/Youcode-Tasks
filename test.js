const prompt = require('prompt-sync')(); 

let x= (prompt('Entrer un mot : '));
let Up = x[0].toUpperCase();
let d=x.slice(1,x.length);
console.log(Up + d);