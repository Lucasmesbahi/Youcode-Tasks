const etudiant= {
    nom: 'Mesbahi',
    prenom: 'Salaheddine',
    age: 23,
    Ville: 'Casablanca',
    Notes : [ 15 , 18 , 19 ],
}

console.log(`L'etudiant : ${etudiant.nom} ${etudiant.prenom} `)
console.log(`La Liste des Notes : ${etudiant.Notes} `)
let somme= 0
for (i=0 ; i < etudiant.Notes.length ; i++) {
    somme= somme + etudiant.Notes[i]
}
let moyenne = somme / etudiant.Notes.length;
console.log(`La Moyenne est : ${moyenne}`)