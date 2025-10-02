// Functions are one of the most important concepts in JavaScript. 
// They let you package code into reusable blocks that can be called multiple times with different inputs.

// What are Functions?
// - Functions are reusable blocks of code that perform specific tasks. They help you:
// - Avoid repeating code
// - Organize your code better
// - Make your code easier to understand and debug

// ============================================================= //

// Basic Function Structure
function functionName(parameters) {
    // code to be executed
    return result;
}

// WAYS TO CREATE FUNCTIONS

// 1. Function Declaration (Most Common)
function greet() {
    console.log("Hello!");
}

function sayHello(name) {
    console.log("Hello " + name);
}

function add(a, b) {
    return a + b;
}

// 2. Function Expression
const greet = function () {
    console.log("Hello!");
};

const multiply1 = function (a, b) {
    return a * b;
};

// 3. Arrow Functions (Modern)
const greet = () => {
    console.log("Hello!");
};

const add = (a, b) => {
    return a + b;
};

// One-line arrow functions (implicit return)
const square = x => x * x;
const multiply = (a, b) => a * b;

// CALLING FUNCTIONS

// Function without parameters
greet();  // "Hello!"

// Function with parameters
sayHello("Alice");  // "Hello Alice"

// Function that returns a value
let result = add(5, 3);
console.log(result);  // 8

// Using return values directly
console.log(multiply(4, 5));  // 20


// ============================================================= //


// FUNCTION PARAMETERS & ARGUMENTS

// Parameters vs Arguments

// Parameters: Variables listed in function definition
// Arguments: Actual values passed to the function

// Parameters: a, b
function multiply(a, b) {
    return a * b;
}

// Arguments: 5, 3
multiply(5, 3);  // 15

// Default Parameters
function greet(name = "Guest") {
    console.log("Hello " + name);
}

greet("Alice");  // "Hello Alice"
greet();         // "Hello Guest"

// Multiple Parameters
function createUser(name, age, isActive = true) {
    return {
        username: name,
        userAge: age,
        active: isActive
    };
}

createUser("John", 25);  // {username: "John", userAge: 25, active: true}


// ============================================================= //


// RETURN STATEMENTS

// Functions with Return Values
function calculateTotal(price, quantity) {
    return price * quantity;
}

let total = calculateTotal(10, 3);  // 30

// Functions without Return (return undefined)
function showMessage(message) {
    console.log(message);
    // No return statement
}

let result1 = showMessage("Hi");  // console: "Hi", result: undefined


// ============================================================= //

// DIFFERENT TYPES OF FUNCTIONS

// Simple Utility Functions
// String functions
function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

function getInitials(firstName, lastName) {
    return firstName[0] + lastName[0];
}

// Number functions
function isEven(number) {
    return number % 2 === 0;
}

function calculateArea(width, height) {
    return width * height;
}

// Boolean Functions
function canVote(age) {
    return age >= 18;
}

function isEmptyString(text) {
    return text === "";
}

function isValidEmail(email) {
    return email.includes("@") && email.includes(".");
}

// Array Functions
function getFirstElement(array) {
    return array[0];
}

function findLongestString(strings) {
    let longest = "";
    for (let str of strings) {
        if (str.length > longest.length) {
            longest = str;
        }
    }
    return longest;
}

// Object Functions
function createPerson(name, age) {
    return {
        name: name,
        age: age,
        isAdult: age >= 18
    };
}

function getFullName(person) {
    return person.firstName + " " + person.lastName;
}


// ============================================================= //


// FUNCTION SCOPE

// Local Variables
function calculate() {
    let result = 5 * 10;  // Local variable
    return result;
}

// console.log(result);  // Error! result is not accessible outside

// Parameters are Local
function multiply(a, b) {
    // a and b are local to this function
    return a * b;
}

let a = 5;  // This is a different variable
multiply(2, 3);  // 6


// ============================================================= //


// COOMON FUNCTION MISTAKES

// Forgetting to Call the Function
function greet() {
    console.log("Hello!");
}

greet;   // ❌ Just referencing the function
greet(); // ✅ Actually calling the function

// Wrong Number of Arguments
function multiply(a, b) {
    return a * b;
}

multiply(5);     // ❌ Returns NaN (5 * undefined)
multiply(5, 3);  // ✅ Returns 15
multiply(5, 3, 10);  // ✅ Returns 15 (extra argument ignored)

// Not Using Return Value
function createMessage(name) {
    return "Hello " + name;
}

createMessage("Alice");  // ❌ Return value is lost
let message = createMessage("Alice");  // ✅ Using return value


// ============================================================= //

// ADVANCED FUNCTION CONCEPTS

// Functions Calling Other Functions
function square(x) {
    return x * x;
}

function calculateHypotenuse(a, b) {
    return Math.sqrt(square(a) + square(b));
}

calculateHypotenuse(3, 4);  // 5

// Functions that Return Functions
function createMultiplier(multiplier) {
    return function (number) {
        return number * multiplier;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

double(5);  // 10
triple(5);  // 15