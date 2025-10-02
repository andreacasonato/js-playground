// Strings are data types used to represent and manipulate text, 
// consisting of sequences of characters enclosed in quotes

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(text.length);

// ACCESSING CHARACTERS
let str = "Hello";

// Bracket notation
console.log(str[0]);

// charAt() method
console.log(str.charAt(0));

// at() method (supports negative indexes)
console.log(str.at(-1));

// ==================================================== //

// Essential String Methods

// toUpperCase() / toLowerCase() --> Change case
// concat()	--> Join strings
// trim() / trimStart() / trimEnd() --> Remove whitespace
// padStart() / padEnd() --> Add padding
// repeat()	--> Repeat strings


// EXTRACTING SUBSTRINGS 
let text1 = "Apple, Banana, Kiwi";

// slice() - most flexible, allows negative indexes
console.log(text1.slice(7, 13));
console.log(text1.slice(-12));

// substring() - similar to slice but no negative indexes  
console.log(text1.substring(7, 13));


// SEARCHING IN STRINGS
let str1 = "Hello world, welcome to the universe.";

console.log(let = str1.indexOf("welcome"));
console.log(let = str1.lastIndexOf("e"));
console.log(let = str1.includes("world"));
console.log(let = str1.startsWith("Hello"));
console.log(let = str1.endsWith("universe."));

// REPLACING CONTENT

let text2 = "I love cats. Cats are great!";

// replace() - only first occurrence
console.log(text2.replace("cats", "dogs"));

// replaceAll() - all occurrences
console.log(text2.replaceAll("Cats", "Dogs"));

// Global replace with regular expression
console.log(text2.replace(/cats/gi, "dogs"));


// SPLITTING INTO ARRAYS
let sentence = "JavaScript is fun";

console.log(sentence.split(" "));
console.log("2024-10-10".split("-"));
console.log("Hello".split(""));