// Create an array containing three values: 1, 2, and 3.
// Nest the original array into a new array three times.
// Output the value 2 from one of the arrays into the console.

let nums = [1, 2, 3];

let mix = [nums, nums, nums];

let valueTwo = mix[0][1];
console.log(valueTwo); // 2