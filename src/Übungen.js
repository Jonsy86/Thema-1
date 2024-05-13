const prompt = require('prompt-sync')({sigint: true});

let artikel = prompt("welches Produkt suchen Sie?");

switch (artikel) 
{
    case "Bohrmaschine":
    case "Bandschleifer":
    case "Kreissäge":
    console.log("Preis: 37,99")            
        
        break;
    case "Schraubendreher":
    case "Hammer":
    console.log("Preis: 7,99")

    default:
    // console.log("Produkt nicht im Sortiment enthalten!")

}