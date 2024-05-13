
/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken


// Funktionsrumpf callee
// Funktionsdeklaration
function test() 
{
console.log("Hallo Esther!")    
}

test();

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

// Funktionsaufruf
// outputNames();

// Funktionsdeklaration
function outputNames() 
{
     // interne Variable | What happens in VEGAS ...
    let firstName = "Jan";
    console.log("Hallo, " + firstName + "!"); 
}

// console.log(firstName); // Fehler : scope!


