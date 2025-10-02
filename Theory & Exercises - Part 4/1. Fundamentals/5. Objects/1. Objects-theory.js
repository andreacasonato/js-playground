// Objects are collections of key-value pairs and are fundamental to JavaScript. 
// They let you store and organize data in a structured way.

// CREATING OBJECTS

// Empty object
let emptyObject = {};

// Object with properties
let person = {
    name: "John",
    age: 30,
    isStudent: false
};

// Multi-line object (easier to read)
let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    color: "blue"
};

// Object Characteristics

// Key-Value Pairs: Each property has a key (name) and value
// Unordered: Properties don't have a guaranteed order
// Flexible: Can store any data type
// Dynamic: Can add/remove properties anytime


// ========================================================================= //


// ACCESSING OBJECT PROPERTIES
// Dot notation

let person1 = {
    name: "Alice",
    age: 25,
    city: "New York"
};

person1.name      // "Alice"
person1.age       // 25
person1.city      // "New York"


// Bracket Notation (Useful for dynamic keys)

let randomPerson = {
    name: "Alice",
    age: 25
};

randomPerson["name"]           // "Alice"
randomPerson["age"]            // 25

let property = "name";
randomPerson[property]         // "Alice" (dynamic access)


// Checking if Property Exists

let person2 = { name: "John", age: 30 };

"name" in person2         // true
person2.hasOwnProperty("age")  // true
person2.hasOwnProperty("city") // false

// MODIFYING OBJECTS
// Adding properties

let person3 = { name: "John" };
person3.age = 30;                    // Using dot notation
person3["city"] = "Boston";          // Using bracket notation

// Result: { name: "John", age: 30, city: "Boston" }

// Updating Properties
let person4 = { name: "John", age: 25 };
person4.age = 30;                    // Update age
person4["name"] = "Johnny";          // Update name

// Removing Properties
let person5 = { name: "John", age: 30, city: "NYC" };
delete person5.age;                  // Remove age property
delete person5["city"];              // Remove city property

// Result: { name: "John" }


// ========================================================================= //


// OBJECT METHODS

// Objects can contain functions (called methods):

let person6 = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
    greet: function () {
        return "Hello, my name is " + this.firstName;
    }
};

person6.fullName()    // "John Doe"
person6.greet()       // "Hello, my name is John"

// Nested Objects
// Objects can contain other objects:

let student = {
    name: "Sarah",
    age: 20,
    address: {
        street: "123 Main St",
        city: "Boston",
        zipCode: "02101"
    },
    grades: {
        math: 95,
        science: 88,
        english: 92
    }
};

student.address.city         // "Boston"
student.grades.math          // 95
student["address"]["zipCode"] // "02101"


// ========================================================================= //


// LOOPING THROUGH OBJECTS

// For...in Loop
let person7 = {
    name: "John",
    age: 30,
    city: "NYC"
};

for (let key in person7) {
    console.log(key + ": " + person7[key]);
}
// Output:
// name: John
// age: 30  
// city: NYC


// ========================================================================= //


// BUILT-IN OBJECT METHODS

// Object.keys()
// Get all property names as an array:

let person8 = { name: "John", age: 30, city: "NYC" };
Object.keys(person8)    // ["name", "age", "city"]

// Object.values()
// Get all property values as an array:

let person9 = { name: "John", age: 30, city: "NYC" };
Object.values(person9)  // ["John", 30, "NYC"]

// Object.entries()
// Get key - value pairs as arrays:

let person10 = { name: "John", age: 30 };
Object.entries(person10) // [["name", "John"], ["age", 30]]


// ========================================================================= //


// SPECIAL OBJECT FEATURES

// Shorthand Property Names
let name1 = "John";
let age1 = 30;

let person11 = { name1, age1 };
// Same as { name: name, age: age }
// Result: { name: "John", age: 30 }

// Method Shorthand
let person12 = {
    name: "John",
    // Old way:
    greet: function () { return "Hello"; },

    // New shorthand:
    sayHi() { return "Hi!"; }
};