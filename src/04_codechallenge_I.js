
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/



const prompt = require('prompt-sync')({sigint: true});

// Geben Sie über eine Prompt-Anforderung eine Zahl ein.
let zahl1 = prompt("Summant 1: ")
zahl1=Number(zahl1);
// zahl1 = parseInt(zahl1)

// Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
let zahl2 = prompt("Summant 2: ")
zahl2=Number(zahl2)
// zahl2 = parsefloat(zahl2) Funktion, die einen String in einen Dezimalzahl umwandelt

let summe = zahl1 + zahl2;  
console.log("Die Summe der Zahlen ist: " + summe)