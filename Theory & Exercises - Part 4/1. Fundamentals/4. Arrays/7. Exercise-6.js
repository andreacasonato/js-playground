// Array Transformation
// let temperatures = [72, 68, 74, 80, 76];
// Find the highest temperature
// Find the lowest temperature
// Create a new array with temperatures above 70
// Check if any temperature is exactly 68

let temperatures = [72, 68, 74, 80, 76];

let maxValue = Math.max(...temperatures);
console.log(maxValue);

let minValue = Math.min(...temperatures);
console.log(minValue);

let aboveTemp = [];

for (let i = 0; i < temperatures.length; i++) {
    if (temperatures[i] > 70) {
        aboveTemp.push(temperatures[i]);
    }
}

console.log(aboveTemp);

let has68 = temperatures.includes(68);
console.log(has68);