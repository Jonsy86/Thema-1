

/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :  
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten : 
4. Ausgabe in Konsole : 
*/


//module: subtraction a - b  test:

 function substract(a,b) {
	return a - b;
}

output(substract(3,2))


// module: addition a + b | test:

output(add(2,2));
output(add(2,-2));

function add(a,b) {
	return a + b;
}

// module: division a / b |  test:
// output(divide(4,2));
// output(divide(3,2));
// output(divide(3,-2));
output(divide(0,2));
output(divide(3,0));
output(divide(0,0));
function divide(a,b) {

	if (b !== 0) {
		return a / b;
	} else {
		return "Error: Divided by 0!";
	}
   
}

// module: multiplication a * b |  test:
// output(multiply(3,2));
// output(multiply(3,-2));
// output(multiply(3,0));
function multiply(a,b) {
    return a * b;
}



function output(outputData) {
console.log(outputData)	
}
  
