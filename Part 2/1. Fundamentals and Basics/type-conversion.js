// Create a variable stringNumber with the value "100".
// Convert it to a number using the Number() function and store it in a new variable. Log the type and value of this new variable to the console.
// Create a variable actualNumber with the value 55.
// Convert it to a string using the String() function and store it in a new variable. Log the type and value of this new variable to the console.

let stringNumber = '100';
let newNumber = Number(stringNumber);
console.log(typeof newNumber, newNumber); // number 100

let actualNumber = 55;
let numberAsString = String(actualNumber);
console.log(typeof numberAsString, numberAsString); // string 55