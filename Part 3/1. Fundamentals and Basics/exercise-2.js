// (Easy)
// Use prompt() to get a number from a user. 
// Calculate the square root of that number and 
// round it to the nearest integer. 
// Alert the result to the user.

let input = prompt('Pick a random number');

let number = parseFloat(input);

let squareRoot = Math.sqrt(number);

let rounded = Math.round(squareRoot);

alert(rounded);