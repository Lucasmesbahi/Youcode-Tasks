const prompt = require('prompt-sync')();

let a =Number(prompt('Entrer La nombre a : '))
let b =Number(prompt('Entrer La nombre b : '))

     console.log('a+b = ' , a + b)
     console.log('a-b = ' , a - b)
     console.log('a*b = ' , a * b)
if (b!== 0 ){
     console.log('a/b = ' , a / b)
}else{ 
    console.log('Division par 0 impossible')
}