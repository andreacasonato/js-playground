// Methods are functions that are stored as object properties. 
// When a function is called as a method, it has access to the object's data using the this keyword.


// WHAT ARE METHODS?

// Methods vs Regular Functions

// - Regular Function: Standalone function
// - Method: Function that belongs to an object

// Regular function
function greet() {
    return "Hello!";
}

// Method (function inside object)
let person = {
    name: "John",
    greet: function () {
        return "Hello!";
    }
};


// ------------------------------------------- //


// CREATING METHODS

// Method in Object Literal
let calculator = {
    // Method without parameters
    sayHello: function () {
        return "Hello!";
    },

    // Method with parameters
    add: function (a, b) {
        return a + b;
    },

    // Method using this keyword
    multiply: function (a, b) {
        return a * b;
    }
};

// Shorthand Method Syntax (ES6+)
let person1 = {
    name: "Alice",

    // Old way:
    greet: function () {
        return "Hello!";
    },

    // New shorthand way:
    introduce() {
        return "My name is " + this.name;
    },

    // Arrow function as method (be careful with this!)
    sayBye: () => {
        return "Goodbye!";
    }
};

// Calling Methods
let person3 = {
    name: "John",
    age: 30,

    greet() {
        return "Hello, my name is " + this.name;
    },

    haveBirthday() {
        this.age++;
        return "Happy birthday! Now I'm " + this.age;
    }
};

// Call methods using dot notation
person.greet();          // "Hello, my name is John"
person.haveBirthday();   // "Happy birthday! Now I'm 31"


// ------------------------------------------- //


// THE this KEYWORD

// What is 'this'?
// 'this' refers to the object that the method is called on.

let student = {
    name: "Sarah",
    grade: 95,

    getInfo() {
        return this.name + " has grade: " + this.grade;
    },

    improveGrade(points) {
        this.grade += points;
        return "New grade: " + this.grade;
    }
};

student.getInfo();       // "Sarah has grade: 95"
student.improveGrade(5); // "New grade: 100"

// 'this' in Different Contexts
let car = {
    brand: "Toyota",
    speed: 0,

    // Regular method - this refers to car object
    accelerate(amount) {
        this.speed += amount;
        return "Speed: " + this.speed;
    },

    // Arrow function - this doesn't work the same way!
    badMethod: () => {
        return this.brand; // Won't work as expected!
    }
};


// ------------------------------------------- //


// BUILT-IN JAVASCRIPT METHODS

// String Methods
let text = "Hello World";

text.toUpperCase();      // "HELLO WORLD"
text.toLowerCase();      // "hello world"
text.length;             // 11 (property, not method)
text.includes("World");  // true
text.indexOf("o");       // 4
text.slice(0, 5);        // "Hello"
text.replace("World", "JavaScript"); // "Hello JavaScript"

// Array Methods
let fruits = ["apple", "banana", "orange"];

fruits.push("grape");    // Add to end
fruits.pop();            // Remove from end
fruits.unshift("kiwi");  // Add to beginning
fruits.shift();          // Remove from beginning
fruits.includes("apple"); // true
fruits.indexOf("banana"); // 1
fruits.join(", ");       // "apple, banana, orange"

// Number Methods
let num = 123.456;

num.toFixed(2);          // "123.46"
num.toString();          // "123.456"
num.toPrecision(5);      // "123.46"

// Method Chaining
// Calling multiple methods in sequence:
let message = "   hello world   ";

// Method chaining
let result = message.trim().toUpperCase().slice(0, 5);
// "HELLO"

// Step by step:
message.trim();          // "hello world"
message.trim().toUpperCase(); // "HELLO WORLD"  
message.trim().toUpperCase().slice(0, 5); // "HELLO"


// ------------------------------------------- //


// CREATING CUSTOM METHODS
// Simple Object with Methods

let bankAccount = {
    balance: 1000,
    owner: "John Doe",

    deposit(amount) {
        this.balance += amount;
        return "New balance: $" + this.balance;
    },

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            return "Withdrew: $" + amount + ". New balance: $" + this.balance;
        } else {
            return "Insufficient funds!";
        }
    },

    checkBalance() {
        return "Current balance: $" + this.balance;
    }
};

bankAccount.checkBalance();  // "Current balance: $1000"
bankAccount.deposit(500);    // "New balance: $1500"
bankAccount.withdraw(200);   // "Withdrew: $200. New balance: $1300"

// Calculator Object
let calculator1 = {
    result: 0,

    add(number) {
        this.result += number;
        return this;
    },

    subtract(number) {
        this.result -= number;
        return this;
    },

    multiply(number) {
        this.result *= number;
        return this;
    },

    divide(number) {
        this.result /= number;
        return this;
    },

    getResult() {
        return this.result;
    },

    clear() {
        this.result = 0;
        return "Calculator cleared";
    }
};

calculator.add(5).multiply(3).subtract(2).getResult(); // 13


// ------------------------------------------- //


// COMMON METHOD MISTAKES
// Forgetting Parentheses

let person2 = {
    name: "John",
    greet() {
        return "Hello!";
    }
};

person.greet;   // ❌ Returns the function, doesn't call it
person.greet(); // ✅ Calls the method

// 'this' Confusion
let obj = {
    value: 42,

    regularMethod() {
        return this.value; // Works fine
    },

    arrowMethod: () => {
        return this.value; // ❌ Won't work (this is not obj)
    }
};