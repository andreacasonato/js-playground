// 1. Declare variables of different data types
let num = 100;              // number
let string = '200';         // string
let choice = true;          // boolean
let firstName = 'Paul';     // string

// 2. Check their types
console.log(typeof num);        // "number"
console.log(typeof string);     // "string"
console.log(typeof choice);     // "boolean"
console.log(typeof firstName);  // "string"

// 3. Convert between types
// string -> number
let newNumber = parseInt(string, 10);
console.log(newNumber);         // 200
console.log(typeof newNumber);  // "number"

// number -> string
let numAsString = String(num);
console.log(numAsString);       // "100"
console.log(typeof numAsString);// "string"

// boolean -> number
let choiceAsNumber = Number(choice);
console.log(choiceAsNumber);    // 1
console.log(typeof choiceAsNumber); // "number"

// number -> boolean
let numAsBoolean = Boolean(num);
console.log(numAsBoolean);      // true
console.log(typeof numAsBoolean); // "boolean"
