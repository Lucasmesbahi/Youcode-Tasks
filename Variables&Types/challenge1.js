const prompt = require('prompt-sync')();

let fullName = prompt("What is your name?")
let age=Number(prompt("How old are you?"))
let sexe = prompt("what is your sexe?")
let email = prompt("Type your e-mail")

console.log(`This is your informations :
- Full Name : ${fullName}
- age : ${age} years old
- sexe : ${sexe}
- E-mail : ${email}`);