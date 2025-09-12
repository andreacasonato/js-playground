// Create a variable stringNumber with the value "100".
// Convert it to a number using the Number() function and store it in a new variable. Log the type and value of this new variable to the console.
// Create a variable actualNumber with the value 55.
// Convert it to a string using the String() function and store it in a new variable. Log the type and value of this new variable to the console.

let stringNumber = '100';
let newNumber = parseInt(stringNumber);
console.log(typeof newNumber, newNumber); // Number

let actualNumber = 55;
let oddNumber = String(actualNumber);
console.log(typeof oddNumber, oddNumber); // String