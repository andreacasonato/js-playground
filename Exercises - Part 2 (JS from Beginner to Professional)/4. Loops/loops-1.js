// In this exercise we will create a number guessing game that takes user input and replies based on how accurate the user's guess was.
// Create a variable to be used as the max value for the number guessing game.
// Generate a random number for the solution using Math.random() and Math.floor(). You will also need to add 1 so that the value is returned as 1-[whatever the set max value is]. You can log this value to the console for development to see the value as you create the game, then when the game is complete you can comment out this console output.
// Create a variable that will be used for tracking whether the answer is correct or not and set it to a default Boolean value of false. We can update it to be true if the user guess is a match.
// Use a while loop to iterate a prompt that asks the user to enter a number between 1 and 5, and convert the response into a number in order to match the data type of the random number.
// Inside the while loop, check using a condition to see if the prompt value is equal to the solution number. Apply logic such that if the number is correct, you set the status to true and break out of the loop. Provide the player with some feedback as to whether the guess was high or low, and initiate another prompt until the user guesses correctly. 
// In this way we use the loop to keep asking until the solution is correct, and at that point we can stop the iteration of the block of code.

let maxValue = 10;

let randomNumber