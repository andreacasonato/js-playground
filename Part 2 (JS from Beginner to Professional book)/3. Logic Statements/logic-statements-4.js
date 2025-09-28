// In this exercise, we'll create a Magic 8-Ball random answer generator:
// Start by setting a variable that gets a random value assigned to it. The value is assigned by generating a random number 0-5, for 6 possible results. You can increase this number as you add more results.
// Create a prompt that can get a string value input from a user that you can repeat back in the final output.
// Create 6 responses using the switch statement, each assigned to a different value from the random number generator.
// Create a variable to hold the end response, which should be a sentence printed for the user. You can assign different string values for each case, assigning new values depending on the results from the random value.
// Output the user's original question, plus the randomly selected case response, to the console after the user enters their question.

// Random number between 0 and 1; 
// Obtain a number between 0 and 5;
// Removes digits past decimal place to provide a whole number;

let randomNumber = Math.floor(Math.random() * 6);

// Prompt the user for a question
let question = prompt('Ask your question:');

// Variable to hold the final response
let userResponse = '';

switch (randomNumber) {
    case 0:
        userResponse = 'It is certain';
        break;
    case 1:
        userResponse = 'Ask again later';
        break
    case 2:
        userResponse = 'Better not tell you now';
        break;
    case 3:
        userResponse = 'My reply is no';
        break
    case 4:
        userResponse = 'Most likely';
        break;
    case 5:
        userResponse = 'Don\'t count on it';
        break
}

console.log(`You asked: ${question}`);
console.log(`The Magic 8-Ball says: ${userResponse}`);