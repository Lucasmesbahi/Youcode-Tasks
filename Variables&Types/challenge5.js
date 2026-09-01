const prompt = require('prompt-sync')();

let C=Number (prompt('Entrer la température en Celsius : '))

if (C < 0 )
    console.log('Solide')
else if (C >=0 && C < 100)
     console.log('Liquide')
else {
    console.log('Gaz')
}