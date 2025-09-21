// (Medium) 
// Given the array [10, 5, 8, 20, 3, 15]:
// a) Use filter() to create a new array with numbers greater than 10.
// b) Use find() to get the first number greater than 12.
// c) Use map() to create a new array where each number is doubled.
// Log all results.

function greaterThan(num) {
    return num > 10;
}

let arrayNums = [10, 5, 8, 20, 3, 15].filter(greaterThan);
console.log(arrayNums);



function moreThan(number) {
    return number > 12;
}

let nums = [10, 5, 8, 20, 3, 15].find(moreThan);
console.log(nums);



function double(numbr) {
    return numbr * 2;
}

let newArray = [10, 5, 8, 20, 3, 15].map(double);
console.log(newArray);