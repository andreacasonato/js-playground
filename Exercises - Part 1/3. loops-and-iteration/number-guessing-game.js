// console.log(Math.floor(Math.random() * 10) + 1);

// Math.random() --> gives 0 <= x < 1 | Example: 0.57
// Math.random() * 10 --> scales it to 0 <= x < 10 | Example: 0.57 * 10 = 5.7
// Math.floor(...) --> chops off the decimal part --> 0–9 | Example: Math.floor(5.7) = 5
// + 1 --> shifts the range up --> 1–10 | Example: 5 + 1 = 6

let secretNumber = Math.floor(Math.random() * 9) + 1;
let userGuess = Number(prompt('Guess a number from 1 to 9'));

while (userGuess !== secretNumber) {
    // Check if the guess is too high or too low
    if (userGuess > secretNumber) {
        console.log('Too high! Guess a lower number.');
        // writes the message in the developer console
        userGuess = Number(prompt('Too high! Try a lower number:'));
        // message shows in the popup box. 
        // It also updates the viariable userGuess.
    } else {
        console.log('Too low! Guess a higher number.');
        userGuess = Number(prompt('Too low! Try a higher number:'));
    }
}

// while loop is perfect for this because it 
// runs as long as a specific condition remains true


// This line only runs when the loop condition 
// (userGuess !== secretNumber) is false
// which means the guess is correct.

console.log('You got it!');
alert('You got it!');