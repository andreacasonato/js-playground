// Chapter Project: Manipulating an Array

// Take the following array:
// const thelist = ['laurence', 'Svekis', true, 35, null, undefined, {test: 'one', score: 55}, ['one', 'two']];

// Manipulate your array using various methods (such as pop(), push(), shift(), and unshift()) and transform it into:
// ["FIRST", "Svekis", "MIDDLE", "hello World", "LAST"]

// You can take the following steps (or adopt your own approach):
// Remove the first item and the last item.
// Add FIRST to the start of the array.
// Assign hello World to the fourth item value.
// Assign MIDDLE to the third index value.
// Add LAST to the last position in the array.
// Output the final array to the console.

const thelist = ['laurence', 'Svekis', true, 35, null, undefined, { test: 'one', score: 55 }, ['one', 'two']];

// Remove first item of the array
thelist.shift();

// Remove last item of the array
thelist.pop();

// Add FIRST to the start of the array
thelist.unshift('FIRST');

// Assign hello World to the fourth item value.
thelist[3] = 'hello World';

// Assign MIDDLE to the third index value.
thelist[2] = 'MIDDLE';

// Add LAST to the last position in the array.
thelist.push('LAST');

// Output the final array to the console.
console.log(thelist);
// ["FIRST", "Svekis", "MIDDLE", "hello World", "LAST"]