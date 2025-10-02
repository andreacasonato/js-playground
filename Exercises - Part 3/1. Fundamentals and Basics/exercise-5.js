// (Medium) 
// Write a script that asks the user for their birth year. 
// Calculate their current age. 
// Account for the month: if the current month is before their birth month, they haven't had their birthday yet this year, so subtract one from the age. 
// Log "You are [age] years old." 
// (Hint: Use new Date() to get the current year and month. getMonth() returns 0 for Jan, 11 for Dec).

let birthYear = parseInt(prompt("What's your birth year?"));
let birthMonth = parseInt(prompt("What's your birth month? (1-12)"));

let today = new Date();
let currentYear = today.getFullYear();
let currentMonth = today.getMonth(); // 0 = Jan, 11 = Dec

let age = currentYear - birthYear;

// If birthday hasn't happened yet this year, subtract 1
if (currentMonth < (birthMonth - 1)) {
    age--;
}

console.log(`You are ${age} years old.`);