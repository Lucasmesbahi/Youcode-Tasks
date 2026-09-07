const prompt = require('prompt-sync')();

function creerLivre(titre, auteur, annee) {
    return {
        titre: titre,
        auteur: auteur,
        annee: annee
    };
}

let titre = prompt("Entrer le titre : ");
let auteur = prompt("Entrer l'auteur : ");
let annee=Number (prompt("Entrer l'année : "));

let livre = creerLivre(titre, auteur, annee);

console.log("Les infos de livre est :");
console.log("-Titre :", livre.titre);
console.log("-Auteur :", livre.auteur);
console.log("-Annee :", livre.annee);