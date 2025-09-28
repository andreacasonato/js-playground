// Ask the user to enter a number and check whether it's greater than,
// equal too, or less than a dynamic number value in your code.
// Output the result to the user.

let dynamicNumber = 390;

let inputNumber = prompt('Enter a number:');

let convertedNumber = Number(inputNumber);

if (convertedNumber > dynamicNumber) {
    console.log('You number is bigger than the dynamic number');
} else if (convertedNumber < dynamicNumber) {
    console.log('Your number is smaller than the dynamic number');
} else if (convertedNumber === dynamicNumber) {
    console.log('Your number is equal to the dynamic number');
}