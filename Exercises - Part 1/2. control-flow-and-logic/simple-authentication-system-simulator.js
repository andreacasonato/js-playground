// Define credentials
let validUsername = 'admin';
let validPassword = 'password123';

// Get user input
let inputUsername = prompt('Please enter your username');
let inputPassword = prompt('Please enter your password');

// Check credentials
if (inputUsername === validUsername && inputPassword === validPassword) {
    console.log('Login successful!')
} else console.log('Invalid username or password');
