// Write a function that takes a number and a callback, 
// and then processes the number using that callback.

const processNumber = (number, callback) => {
    return callback(number);
}

// A separate named function that we will use as our callback
const squareNumber = (num) => {
    return num * num;
}

// Our original number
let myNumber = 5;

// We call processNumber and pass our number and the callback function as arguments.
// The result of squareNumber(5) is returned and then logged to the console.
console.log(processNumber(myNumber, squareNumber)); // 25