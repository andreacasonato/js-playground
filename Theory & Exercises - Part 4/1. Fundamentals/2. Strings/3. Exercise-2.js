// STRING CLEANING
// Clean up this string: " TOO MUCH SPACE!!! "
// Remove extra spaces
// Remove the exclamation marks
// Make it lowercase

let phrase = " TOO MUCH SPACE!!! ";

console.log(phrase = phrase.trim());
console.log(phrase = phrase.replaceAll("!", "")); // slice() takes numbers, not strings
console.log(phrase = phrase.toLowerCase());

console.log(phrase);