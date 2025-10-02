// Create these simple functions:
// A function that greets a person by name
// A function that calculates the area of a rectangle
// A function that converts Celsius to Fahrenheit
// A function that checks if a number is positive


// Function that greets a person by name
function greet(firstName) {
    console.log(`Hello, ${firstName}`);
}

greet("Daniel");


// Function that calculates the area of a rectangle
function rectangleArea(height, width) {
    return height * width;
}

console.log(`The area of the rectangle is ${rectangleArea(20, 10)}`);


// Function that converts Celsius to Fahrenheit
function tempConvert(celsius) {
    return celsius * 1.8 + 32;
};

console.log(`20°C in Fahrenheit is ${tempConvert(20)}°F`);


// Function that checks if a number is positive

function isPositive(num) {
    if (num > 0) {
        console.log(`${num} is positive`);
    } else if (num < 0) {
        console.log(`${num} is negative`);
    } else {
        console.log(`The number is zero`);
    }
}

isPositive(9);


// =============================================== //


// (Testing a function)

function congratulate(user, day) {
    console.log(`Congrats ${user} on your ${day} achievement!`);
}

let steps = 12000;
let workoutTime = 60;

if (steps > 10000) {
    congratulate("Daniel", "Monday");
}

if (workoutTime > 30) {
    congratulate("Alice", "Saturday");
}

// (Testing a function)

function calculateFinalPrice(price, itemName) {
    let taxRate = 0.1;
    let discount = 0.2;
    let deliveryFee = 5;

    let total = (price * (1 - discount)) * (1 + taxRate) + deliveryFee;
    console.log(`Final price for ${itemName} is $${total}`)

}

calculateFinalPrice(80, "shoes");
calculateFinalPrice(120, "jacket");
calculateFinalPrice(200, "headphones");