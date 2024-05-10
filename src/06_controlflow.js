// Entscheidungsstrukturen | control flow

// Deklaration + Assignment
const ageJohn = 30;
const ageMark = 35;

// Deklaration
let isJohnOlder, isJohnEqual;

// Test | Logische Aussage
isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);

//  Ausgabe
 console.log("ageJohn: " + ageJohn);
 console.log("ageMark: " + ageMark);
 console.log("isJohnOlder: " + isJohnOlder);
 console.log("isJohnEqual: " + isJohnEqual);
 console.log("------------------");

// if (false) //fake it!
// if (isJohnOlder) // Verweis auf ein Testergebnis
if(ageJohn > ageMark) // Test 

{ // codeblock
    console.log("John ist älter!");   
}