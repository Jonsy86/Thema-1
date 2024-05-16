// const prompt = require('prompt-sync')({sigint: true});

// let artikel = prompt("welches Produkt suchen Sie?");

// switch (artikel) 
// {
//     case "Bohrmaschine":
//     case "Bandschleifer":
//     case "Kreissäge":
//     console.log("Preis: 37,99")            
        
//         break;
//     case "Schraubendreher":
//     case "Hammer":
//     console.log("Preis: 7,99")

//     default:
    // console.log("Produkt nicht im Sortiment enthalten!")

// }



// Codechallenge 12 von ChatGPT

function getSentence(arr, op) {
    // Join the array of words into a single string with spaces between words
    let sentence = arr.join(" ");

    // Determine the correct punctuation based on the operation type
    let punctuation;
    if (op === "S") {
        punctuation = ".";
    } else if (op === "Q") {
        punctuation = "?";
    } else if (op === "E") {
        punctuation = "!";
    } else {
        // If an invalid operation is provided, return an error message
        return "Invalid operation type";
    }

    // Combine the sentence with the punctuation
    sentence += punctuation;

    // Return the complete sentence
    return sentence;
}

// Testing the function with the provided examples
console.log(getSentence(["Ich", "bin", "Max"], "S")); // Output: "Ich bin Max."
console.log(getSentence(["Bist", "du", "Max"], "Q")); // Output: "Bist du Max?"
console.log(getSentence(["Ich", "bin"], "E"));        // Output: "Ich bin!"
console.log(getSentence(["Ich", "hätt", "gern", "die", "Platt", "von", "dene", "zwei", "diwodaso", "Spass", "mache,", "habbe", "Sie", "die"], "Q"));



