// Entscheidungsstrukturen | control flow

// Deklaration + Assignment
//  const ageJohn = 32;
//  const ageMark = 30;

// Deklaration
//  let isJohnOlder, isJohnEqual;

// Test | Logische Aussage
//  isJohnOlder = (ageJohn > ageMark);
//  isJohnEqual = (ageJohn == ageMark);

//  Ausgabe
//  console.log("ageJohn: " + ageJohn);
//  console.log("ageMark: " + ageMark);
//  console.log("isJohnOlder: " + isJohnOlder);
//  console.log("isJohnEqual: " + isJohnEqual);
//  console.log("------------------");

// if (false) //fake it!
// if (isJohnOlder) // Verweis auf ein Testergebnis
// if(ageJohn > ageMark) // Test 

{ // codeblock
    // console.log("John ist älter!");   
}

// IF - Else
// Mit ALternative, entweder ja oder nein

// if (condition) 
// { // ja-zweig
//     console.log("John ist älter!");   
// }
// else 
// { // alternativ-zweig
//     console.log("John ist jünger!");    
// }

// IF - Else If

//  if (isJohnOlder) 
//  {
//    console.log("John ist älter!")  
//  }
//  else if (isJohnEqual) 
//  {
//   console.log("John ist gleich alt!")   
//  }

//  else 
//  {
//     console.log("John ist jünger!") 
//  }


// Fallunterscheidung / Switch Case

const firstName = "Jane"
let job;

job = "driver" 
job = "diver"
// job = "artist"
// job = "pilot"
// job = "teacher"
// job = "instructor"

switch (job) 
{
  case "driver" :
    console.log(firstName + ".. fährt Taxi!");
    break;
  case "diver" :
    console.log(firstName + ".. taucht im Rhein!");
    break;


  default:
    break;
}