// Create an array of numbers: [40, 100, 1, 5, 25, 10]
// Find the index of the number 25 in the array.
// Check if the array includes the number 100. Log the result (should be true or false).
// Sort the array numerically in ascending order (1, 5, 10...).
// Reverse the sorted array to be in descending order (100, 40, 25...).
// Log the final array.

let numbers = [40, 100, 1, 5, 25, 10];

console.log(numbers.indexOf(25)); // 4

console.log(numbers.includes(100)); // true

// Sort the array numerically in ascending order
numbers.sort((a, b) => a - b);
console.log(numbers.sort()); // [1, 5, 10, 25, 40, 100]

console.log(numbers.reverse()); // [100, 40, 25, 10, 5, 1]

console.log(numbers); // [100, 40, 25, 10, 5, 1]
