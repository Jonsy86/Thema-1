
/* Die Satzbau-Maschine | Arrays */

/**
 *   THEORIE
 * 
 */
// let arr;

// //Arr = new Array(); // Konstruktor
// arr = []
// arr = [2,11,7,8,10] // Array mit Elementen



// output(arr);
// output(arr.length);
// output(arr[0]) // Index 0 (1. Pos. im Array)
// output(arr[arr.length-1]) // letzte Pos. // allgemein .. n-1


// * 02a. Theorie: Schleifen (for-schleife) */
// /* For -Schleifen als allg. Wiederholungs-Struktur */

// Inkrement (untere Grenze --> obere Grenze)
// for (let i = 0; i < 10; i++) // i = Schleifenindex
// {
//  output("index: " + i);   
    
// }

// Dekrement (obere Grenze --> untere Grenze)
// for (let i = 10; i > 0; i--) // i = Schleifenindex
// {
//  output("index: " + i);   
    
// }


/* 02b. For-Schleife für Array-Index (Iteration)*/

// let arr = ["Ich","bin","die","coole","Maxine","Mützerich"];
//  for (let i = 0; i < arr.length; i++) // i = Schleifenindex
//  {
//     output("intern: " + i);   
//     output("extern: " + arr[i]); // Mapping

//  }


/********* Überlegungen - Transponierung **********/
/*
1. Einer Variablen kann Ihr eigener Wert zugewiesen werden.
Solange die Variable existiert, bleibt dieser erhalten.
hier: Aufsummierung
*/
/* Zu "Fuß" - DRY !!! */
// let a = 0; // Anfangswert
// output("inhalt von a: " + a);
// a = a + 1; // a = 0 + 1
// output("inhalt von a: " + a);
// a = a + 1; // a = 1 + 1
// output("inhalt von a: " + a);
// a = a + 1; // a = 2 + 1
// output("inhalt von a: " + a);


// let a = 0; Anfangswert
// for (let i = 0; i < 5; i++) {
//      a = a + 1
//      output("inhalt von a: " + a)
// }


/*
1a. Einer Variablen kann Ihr eigener Wert zugewiesen werden
Solange die Variable existiert, bleibt dieser erhalten
hier: Verkettung eines Strings // Transponierung
*/

//  let a = ""; // Anfangswert - leerer String
//  for (let i = 0; i < 5; i++) {
//       a = a + "Test";
//       output("inhalt von a: " + a)
//  }




/**
 *   PRAXIS
 * 
 */


/*** 01. Funktionalität mit Einzelparametern */
// --> "Ich bin Max Mütze."
//  output(getSentence("Ich","bin","Max","Mütze"));
// output(getSentence("Ich","bin","die","coole","Maxine","Mützerich"));
// function getSentence(word1,word2,word3,word4) {
//     const GAP = " ";
//     const PUNCT = ".";
//     let str =   word1 + GAP +
//                 word2 + GAP +
//                 word3 + GAP +
//                 word4 + 
//                 PUNCT;

//     return str;
// }



/*** 01a. Funktionalität mit Array 1 */
// Kritik | Überlegung
// word1,word2, .... wordN :: Semantische Struktur
// arr[0],arr[1] ... arr[n-1] :: Numerische Struktur (0,1,2,3 ... n)
// --> Transformation semantisches Problem --> numerisches Problem

// output(getSentenceArr(["Ich","bin","die","coole","Maxine","Mützerich"]));

//  output(getSentenceArr(["Ich","bin","die","coole","Maxine","Mützerich"]));
//  function getSentenceArr(arr) {
//      const GAP = " ";
//      const PUNCT = ".";
//      let str =   arr[0] + GAP +
//                  arr[1] + GAP +
//                  arr[2] + GAP +
//                  arr[3] + GAP +
//                  arr[4] + GAP +
//                  arr[5]
//                  PUNCT;

//      return str;
//  }



  output(getSentenceArr2(["Ich","bin","die","coole","Maxine","Mützerich"]));
  function getSentenceArr2(arr) {

      const GAP = " ";
      const PUNCT = ".";
      let str = "";


// for (let i = 0; i < arr.length; i++) 
// {
//     if (i == arr.length -1) {
      
//     str += arr[i] + PUNCT;  
//     } else {
//         str += arr[i] + GAP;  
//     }
     
    
// }

//     return str;
      
// }


    // 2. Variante: Struktur erzeugen + trimmen()
    for (let i = 0; i < arr.length; i++)  // i = Schleifenindex
    {
        str += arr[i] + GAP; // Regel
    }

    return str.trim() + PUNCT;


}










// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputStr) {
    console.log(outputStr);
}


