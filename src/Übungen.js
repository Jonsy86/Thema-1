const prompt = require('prompt-sync')({sigint: true});

let firstName = prompt("Jonas: ");
let familyName = prompt("Nolte: ");
console.log("Hallo, " + firstName + " " + familyName +"!");