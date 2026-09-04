const prompt = require('prompt-sync')();

let lettre =(prompt('Entrer la lettre : ')).toLowerCase();

switch (lettre) {
    case 'a':
    case 'e':
    case 'o':
    case 'i':
    case 'u':
    case 'y':
        console.log(`La lettre (${lettre}) est voyelle`)
        break;
    default:
        console.log(`La lettre (${lettre}) est consonne `)
    }