// Create a prompt to ask the user's age.
// Convert the response from the prompt to a number.
// Declare a message variable that you will use to hold the console message for the user.
// If the input age is equal to or greater than 21, set the message variable to confirm entry to a venue and the ability to purchase alcohol.
// If the input age is equal to or greater than 19, set the message variable to confirm entry to the venue but deny the purchase of alcohol.
// Provide a default else statement to set the message variable to deny entry if none are true.
// Output the response message variable to the console.

let question = prompt('How old are you?');

let userAge = Number(question);

console.log(userAge);

if (userAge >= 21) {
    console.log('You may enter the venue and purchase alcohol');
} else if (userAge >= 19) {
    console.log('You may enter the venue but you are not allowed to purchase any alcohol');
} else {
    console.log('You won\'t be allowed entry today');
}