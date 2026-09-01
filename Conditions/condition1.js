const prompt = require('prompt-sync')();

let n=Number (prompt('Entrer la nombre : '))
if (n%2 ==0) {
    console.log('ce nombre est pair')
}  
else {
    console.log('ce nombre est impair')
}