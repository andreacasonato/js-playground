// Search and Find
// let mixed = [1, "apple", true, "banana", 42, "orange"];
// Find all string elements
// Find the first number
// Check if the array contains the boolean true
// Find the last element

let mixed = [1, "apple", true, "banana", 42, "orange"];

// Find all string elements
let stringElements = [];
for (let i = 0; i < mixed.length; i++) {
    if (typeof mixed[i] === "string") {
        stringElements.push(mixed[i]);
    }
}
console.log(stringElements);

// Find the first number
let firstNumber;
for (let i = 0; i < mixed.length; i++) {
    if (typeof mixed[i] === "number") {
        firstNumber = mixed[i];
        break;
    }
}
console.log(firstNumber);

// Check if the array contains the boolean true
let containsTrue = mixed.includes(true);
console.log(containsTrue);

// Find the last element
let lastElement = mixed[mixed.length - 1];
console.log(lastElement);
