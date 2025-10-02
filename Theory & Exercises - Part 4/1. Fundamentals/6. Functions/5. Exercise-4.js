// Create functions that:
// Check if a person is old enough to vote (18+)
// Check if a string is empty
// Check if a number is between 1 and 100
// Check if two strings are the same


// Check if a person is old enough to vote (18+)
function isOldEnough(age) {
    if (age >= 18) {
        return `You are old enough to vote`;
    } else {
        return `You are NOT old enough to vote`;
    }
}

console.log(isOldEnough(20));


// Check if a string is empty
function isEmpty(string) {
    if (string.length === 0) {
        return `The string is empty`;
    } else {
        return `The string has text. It says: "${string}"`;
    }
}

console.log(isEmpty("Hello"));


// Check if a number is between 1 and 100
function isBetween(number) {
    if (number < 100 && number > 0) {
        return `"${number}" is between 0 and 100`;
    } else {
        return `"${number}" is not between 0 and 100`
    }
}

console.log(isBetween(50));


// Check if two strings are the same
function stringEquality(string1, string2) {
    if (string1 === string2) {
        return `Strings are the same`;
    } else {
        return `Strings don't look the same`;
    }
}

console.log(stringEquality("Hello", "Hello, how are you?"));