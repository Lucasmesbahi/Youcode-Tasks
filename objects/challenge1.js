const prompt = require('prompt-sync')();
const personne =prompt( {
    nom: 'Mesbahi',
    prenom: 'Salaheddine',
    age: 23,
    Ville: 'Casablanca'
}
);

console.log(`nom : ${personne.nom}`);
console.log(`prenom : ${personne.prenom}`);
console.log(`age : ${personne.age} ans`);
console.log(`Ville : ${personne.Ville}`);