// Arrays are ordered collections of data that can store multiple values in a single variable. 
// They're one of the most important data structures in JavaScript!

// CREATING ARRAYS
// Empty array
let emptyArray = [];

// Array with values
let fruits = ["apple", "banana", "orange"];
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "hello", true, null];

// Array Characteristics
// Ordered: Elements maintain their position
// Zero-indexed: First element is at position 0
// Dynamic: Can grow/shrink automatically
// Can hold any data type: Numbers, strings, booleans, even other arrays


// ========================================= //


// ACCESSING ARRAY ELEMENTS

// Using Indexes
let colors = ["red", "green", "blue"];

colors[0]  // "red" (first element)
colors[1]  // "green" (second element)  
colors[2]  // "blue" (third element)
colors[3]  // undefined (doesn't exist)

// Finding Array Length
let fruits1 = ["apple", "banana", "orange"];
fruits1.length    // 3

// Getting Last Element
let fruits2 = ["apple", "banana", "orange"];
fruits2[fruits2.length - 1]    // "orange"


// ========================================= //


// ESSENTIAL ARRAY METHODS

// ADDING/REMOVING ELEMENTS

// push() - Add to end
let fruits3 = ["apple", "banana"];
fruits3.push("orange");    // ["apple", "banana", "orange"]

// pop() - Remove from end
let fruits4 = ["apple", "banana", "orange"];
fruits4.pop();    // ["apple", "banana"] - returns "orange"

// unshift() - Add to beginning
let fruits5 = ["banana", "orange"];
fruits5.unshift("apple");    // ["apple", "banana", "orange"]

// shift() - Remove from beginning
let fruits6 = ["apple", "banana", "orange"];
fruits6.shift();    // ["banana", "orange"] - returns "apple"

// FINDING ELEMENTS

// indexOf() - Find position of element
let fruits7 = ["apple", "banana", "orange"];
fruits7.indexOf("banana")    // 1
fruits7.indexOf("grape")     // -1 (not found)

// includes() - Check if array contains element
let fruits8 = ["apple", "banana", "orange"];
fruits8.includes("apple")    // true
fruits8.includes("grape")    // false

// COMBINING & EXTRACTING

// concat() - Combine arrays
let fruits9 = ["apple", "banana"];
let veggies = ["carrot", "spinach"];
let food = fruits.concat(veggies);    // ["apple", "banana", "carrot", "spinach"]

// slice() - Extract portion of array
let fruits10 = ["apple", "banana", "orange", "grape"];
fruits10.slice(1, 3)    // ["banana", "orange"] (from index 1 to 3, not including 3)
fruits10.slice(2)       // ["orange", "grape"] (from index 2 to end)

// join() - Convert array to string
let fruits11 = ["apple", "banana", "orange"];
fruits11.join(", ")    // "apple, banana, orange"
fruits11.join(" - ")   // "apple - banana - orange"

// REVERSING & SORTING

// reverse() - Reverse array order
let numbers1 = [1, 2, 3];
numbers1.reverse()    // [3, 2, 1]

// sort() - Sort array elements
let fruits12 = ["banana", "apple", "orange"];
fruits12.sort()    // ["apple", "banana", "orange"] (alphabetical)

let numbers2 = [3, 1, 2];
numbers2.sort()   // [1, 2, 3] (numerical)


// ========================================= //


// LOOPING THROUGH ARRAYS

// Basic FOR LOOP

let fruits15 = ["apple", "banana", "orange"];

for (let i = 0; i < fruits15.length; i++) {
    console.log(fruits[i]);
}
// Output: "apple", "banana", "orange"

// For...of Loop (Simpler)

let fruits16 = ["apple", "banana", "orange"];

for (let fruit of fruits16) {
    console.log(fruit);
}
// Output: "apple", "banana", "orange"


// ========================================= //


// MULTI-DIMENSIONAL ARRAYS

// Arrays can contain other arrays!

// 2D Array (like a grid)
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

matrix[0][0]    // 1 (first row, first column)
matrix[1][2]    // 6 (second row, third column)
matrix[2][1]    // 8 (third row, second column)