// This is a game between a player and the computer, where both will make a random selection of either Rock, Paper, or Scissors (alternatively, you could create a version using real player input!). 
// Rock will beat out Scissors, Paper will beat out Rock, and Scissors will beat out Paper. 
// You can use JavaScript to create your own version of this game, applying the logic with an if statement. 
// Since this project is a little more difficult, here are some suggested steps:

// Create an array that contains the variables Rock, Paper, and Scissors.
// Set up a variable that generates a random number 0-2 for the player and then do the same for the computer's selection. The number represents the index values in the array of the 3 items.
// Create a variable to hold a response message to the user. This can show the random results for the player and then also the result for the computer of the matching item from the array.
// Create a condition to handle the player and computer selections. If both are the same, this results in a tie.
// Use conditions to apply the game logic and return the correct results. There are several ways to do this with the condition statements, but you could check which player's index value is bigger and assign the victory accordingly, with the exception of Rock beating Scissors.
// Add a new output message that shows the player selection versus the computer selection and the result of the game.


// Define the available choices.
// The array indexes will be used later: 0 -> "Rock", 1 -> "Paper", 2 -> "Scissors"
let options = ['rock', 'paper', 'scissors'];

// Generate random indexes for player and computer.
// Math.random() generates a number in [0, 1). Multiplying by 3 gives [0, 3).
// Math.floor(...) then converts that into an integer 0, 1, or 2.
let playerRandom = prompt('Choose a number for Rock (0), Paper (1), Scissors (2)');
let computerRandom = Math.floor(Math.random() * 3);

// Map the random indexes to the actual choice strings from the options array.
// Using the random index as an array index gives the selected choice.
let playerChoice = options[playerRandom];
let computerChoice = options[computerRandom];

// Show what each side chose so the user can see the picks before the result.
console.log(`Player chose: ${playerChoice}`);
console.log(`Computer chose: ${computerChoice}`);

if (playerChoice === computerChoice) {
    console.log('It\'s a tie!');
} else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
) {
    console.log('Player wins!');
} else {
    console.log('Computer wins!');
};