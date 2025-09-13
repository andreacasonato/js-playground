// Start with this array: let fruits = ["Apple", "Banana"];
// Use a method to add "Orange" to the end of the array.
// Use a method to add "Strawberry" to the beginning of the array.
// Use a method to remove the fruit from the end of the array. Log the removed item.
// Use a method to remove the fruit from the beginning of the array. Log the removed item.
// Log the final state of the fruits array.


let fruits = ["Apple", "Banana"];

// Add "Orange" to the end
fruits.push("Orange");

// Add "Strawberry" to the beginning
fruits.unshift("Strawberry");

// Remove the fruit from the end and log it
let last = fruits.pop();
console.log("Removed from end:", last);

// Remove the fruit from the beginning and log it
let first = fruits.shift();
console.log("Removed from beginning:", first);

console.log("Final fruits array:", fruits);
// Final fruits array: ["Apple", "Banana"]