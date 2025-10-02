// Create functions that:
// Calculate the square of a number
// Check if a number is even
// Find the maximum of two numbers
// Calculate the average of three numbers


// Calculate the square of a number
function numberSquare(num) {
    return num ** 2;
}

console.log(numberSquare(10));


// Check if a number is even
function isEvenNumber(number) {
    if (number % 2 === 0) {
        return `${number} is an even number.`;
    } else {
        return `${number} is an odd number.`;
    }
}

console.log(isEvenNumber(40));


// Find the maximum of two numbers
function maxNum(a, b) {
    return Math.max(a, b);
}

console.log(maxNum(2892, 2793));


// Calculate the average of three numbers
function calcAverage(a, b, c) {
    return Math.floor((a + b + c) / 3);
}

console.log(calcAverage(320, 294, 129));