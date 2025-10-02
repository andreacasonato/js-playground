let firstNumber = Number(prompt('Choose a number'));
let operator = prompt('Choose an operator (+, -, *, /)');
let secondNumber = Number(prompt('Choose a second number'));

if (operator === '+') {
    console.log(firstNumber + secondNumber)
} else if (operator === '-') {
    console.log(firstNumber - secondNumber)
} else if (operator === '*') {
    console.log(firstNumber * secondNumber)
} else if (operator === '/') {
    console.log(firstNumber / secondNumber);
} else console.log('Invalid operator. Please use +, -, *, or /')