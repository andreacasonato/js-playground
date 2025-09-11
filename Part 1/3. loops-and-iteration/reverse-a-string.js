let myString = 'hello';
let reversedString = '';

for (let i = myString.length - 1; i >= 0; i--) {
    reversedString += myString[i];
}

console.log(reversedString);

// olleh