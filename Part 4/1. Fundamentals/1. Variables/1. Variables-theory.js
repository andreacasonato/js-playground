// Variables are containers that store data values. 
// Think of them as labeled boxes where you can put information to use later.

// LET
let score = 100;
score = 150; // This is allowed

// CONST
const PI = 3.14159;
const BIRTHDAY = "1990-05-15";
// PI = 3.14; // This would cause an ERROR!

// VARIABLE NAMING RULES
// Valid names
let userName = "John";
let _temp = 25;
let $price = 9.99;
let user2 = "second user";

// Invalid names
// let 2user = "error";    // Cannot start with number
// let user-name = "error"; // No hyphens
// let let = "error";      // Cannot use reserved words

// ========================================= //

// DATA TYPES YOU CAN STORE

// PRIMITIVE TYPES
// String
let name = "Alice";

// Number
let age = 30;
let price = 19.99;

// Boolean
let isStudent = true;
let isWorking = false;

// Undefined
let unknown; // undefined

// Null
let empty = null;

// Symbol (ES6)
let id = Symbol("id");

// BigInt (for very large numbers)
let bigNumber = 1234567890123456789012345678901234567890n;


// REFERENCE TYPES
// Array
let fruits = ["apple", "banana", "orange"];

// Object
let person = {
    name: "John",
    age: 25,
    isStudent: true
};

// Function
let greet = function () {
    console.log("Hello!");
};

// ========================================= //

// VARIABLE SCOPE

// Global scope
let globalVar = "I'm global";

function test() {
    console.log(globalVar); // Accessible
}

// Function scope
function myFunction() {
    var functionScoped = "I'm function scoped";
    console.log(functionScoped); // Works
}
// console.log(functionScoped); // ERROR - not accessible outside

// Block scope
if (true) {
    let blockScoped = "I'm block scoped";
    console.log(blockScoped); // Works
}
// console.log(blockScoped); // ERROR - not accessible outside

// ========================================= //

// BEST PRACTICES
// Use descriptive names
// Prefer const over let
// Initialize variables when declaring
// Use camelCase for variable names