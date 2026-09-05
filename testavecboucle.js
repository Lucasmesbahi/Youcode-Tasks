const prompt = require('prompt-sync')(); 

let x= (prompt('Entrer un mot : '));
let a=x.length
let Up = x[0].toUpperCase();
for (i=1 ;i< a ;i+=1){
    Up += x[i]
}
console.log(Up)