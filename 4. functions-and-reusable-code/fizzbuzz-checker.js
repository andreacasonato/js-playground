// Write a classic coding challenge that uses if/else if statements within a function.

const fizzBuzz = (number) => {
    if (number % 3 === 0 && number % 5 === 0) {
        return 'FizzBuzz';
    } else if (number % 3 === 0) {
        return 'Fizz';
    } else if (number % 5 === 0) {
        return 'Buzz';
    } else {
        return number;
    }
}

let number = 15;
let otherNumber = 9;
let finalNumber = 10;

console.log(fizzBuzz(number));
console.log(fizzBuzz(otherNumber));
console.log(fizzBuzz(finalNumber));