// Create functions that:
// Return the first element of an array
// Return the last element of an array
// Find the longest string in an array
// Check if an array contains a specific value


// Return the first element of an array

function getFirstElement(array1) {
    return array1[0];
}

let array1 = ["apple", "banana", "kiwi"];

console.log(getFirstElement(array1));

// const getFirstElement = array1 => array1[0];

// ==================================== //
// Return the last element of an array

function getLastElement(array2) {
    return array2[array2.length - 1];
}

let array2 = ["watermelon", "pear", "mango"];

console.log(getLastElement(array2));

// const getLastElement = array2 => array2[array2.length - 1];

// ==================================== //
// Find the longest string in an array

function longestString(array3) {
    let longest = ""
    for (let str of array3) {
        if (str.length > longest.length) {
            longest = str;
        }
    }
    return longest;
}

let array3 = ["pineapple", "apricot", "banana", "mangosteen"];

console.log(longestString(array3));

// const longestString = array3 => array3.reduce((a, b) => a.length >= b.length ? a : b);

// ==================================== //
// Check if an array contains a specific value

function arrayContains(array4, value) {
    return array4.includes(value);
}

let array4 = ["pineapple", "apricot", "banana", "mangosteen"];
console.log(arrayContains(array4, "apricot"));
console.log(arrayContains(array4, "kiwi"));

// const arrayContains = (array4, value) => array4.includes(value);
