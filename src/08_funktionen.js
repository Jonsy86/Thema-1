
/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken


// Funktionsrumpf callee
// Funktionsdeklaration
// function test() 
// {
// console.log("Hallo Esther!")    
// }

// test();

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

// Funktionsaufruf
// outputNames();

// Funktionsdeklaration
// function outputNames() 
{
     // interne Variable | What happens in VEGAS ...
    // let firstName = "Jan";
    // console.log("Hallo, " + firstName + "!"); 
}

// console.log(firstName); // Fehler : scope!




// outputNames3("Maxine","Mützerich");

// const prompt = require('prompt-sync')({sigint: true});
// outputNames3(prompt("Vorname? :"),prompt("Nachname?:"))

// function outputNames3(firstName, familyName) 
// {
//     console.log("Hallo, " + firstName + " " + familyName + "!")
// } 

/***** Funktionen 03a *****/
// 03a. Vorbereitung -Trennen der Funktionalitäten
// Postulat: one function = one job (uncle Bob)
// SRP single responsibility principle

outputNamesSRP("Maxine","Mützerich");

function outputNamesSRP(firstName, familyName) { // Parameter

    // 1. Funktionalität: string composing
    const GAP = " ";
    let outputStr = "Hallo, " + firstName + GAP + familyName + "!"

    // 2. Funktionalität: string output
    console.log(outputStr);



