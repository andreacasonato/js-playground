// Build a simple set of tools for processing text. 
// This will help you practice writing concise arrow functions and function expressions.

const capitalize = function (word) {
    // We get the first character using bracket notation [0], capitalize it,
    // then add the rest of the word using the slice() method.
    return word[0].toUppercase() + word.slice(1);
}

const countWords = (sentence) => {
    // The split(' ') method splits the string by spaces, creating an array of words.
    // We then get the length of that array.
    return sentence.split('').length;
}

const reverseString = function (str) {
    // We use a chain of methods:
    // 1. split('') breaks the string into an array of characters.
    // 2. reverse() reverses the order of the items in the array.
    // 3. join('') turns the array of characters back into a string.
    return str.split('').reverse().join('');
}

let word = 'andre';
let sentence = 'I love playing tennis';
let str = 'I love coding';

console.log(capitalize(word));
console.log(countWords(sentence));
console.log(reverseString(str));