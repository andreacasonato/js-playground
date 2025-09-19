// (Medium) 
// Create a string variable: const crazyString = 'He said, "This is awesome!"'. 
// Now, using string methods, do the following in sequence:
// a) Convert it to all lowercase.
// b) Replace "awesome" with "incredible".
// c) Log the index of the word "incredible".
// d) Log the final string.

const crazyString = 'He said, "This is awesome!".';

let lowerCase = crazyString.toLowerCase();

let replacedStr = lowerCase.replace('awesome', 'incredible');

console.log(replacedStr.indexOf('incredible'));

console.log(replacedStr);