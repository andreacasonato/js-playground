// SEARCH AND REPLACE
// Work with this sentence: "The quick brown fox jumps over the lazy dog"
// Check if it contains "fox"
// Find the position of "lazy"
// Replace "quick" with "slow"

let sentence = "The quick brown fox jumps over the lazy dog";

console.log(sentence.includes("fox"));
console.log(sentence.indexOf("lazy"));
console.log(sentence = sentence.replace("quick", "slow"));

console.log(sentence);

// To keep the original sentence untouched
// let newSentence = sentence.replace("quick", "slow");
// console.log(newSentence);