// The task is to create a small "library" of reusable mathematical functions.

const add = (a, b) => {
    return a + b;
}

const subtract = (a, b) => {
    return a - b;
}

const multiply = (a, b) => {
    return a * b;
}

const divide = (a, b) => {
    return a / b;
}

let a = 10;
let b = 5;

console.log(add(a, b)); // 15
console.log(subtract(a, b)); // 5
console.log(multiply(a, b)); // 50
console.log(divide(a, b)); // 2



// Better syntax
// Romoved the curly braces and return keyword, since each function contains a single return statement

const addNumbers = (x, y) => x + y;
const subtractNumbers = (x, y) => x - y;
const multiplyNumbers = (x, y) => x * y;
const divideNumbers = (x, y) => x / y;

let x = 10;
let y = 5;

console.log(addNumbers(x, y));      // 15
console.log(subtractNumbers(x, y)); // 5
console.log(multiplyNumbers(x, y)); // 50
console.log(divideNumbers(x, y));   // 2