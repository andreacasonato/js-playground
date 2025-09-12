// Write some code to calculate the hypotenuse of a triangle using the Pythagorean theorem when given the values of the other two sides. 
// The theorem specifies that the relation between the sides of a right-angled triangle is a2 + b2 = c2.

// You can use prompt() to get the value for a and b. Write code to get the value from the user for a and b. 
// Then square the values of both a and b before adding them together and finding the square root. 
// Print your answer to the console.

// Get input from user
let a = prompt('Enter the value for side a:')
let b = prompt('Enter the value for side b:')

// Convert string input to numbers
// Using parseFloat() because I expect decimal numbers too.
a = parseFloat(a);
b = parseFloat(b);

// ------ Calculate hypothenuse ------ //
// Calculate squares of a and b
let aSquared = a ** 2;
let bSquared = b ** 2;
// Sum squared values
let sumOfSquares = aSquared + bSquared;
// Calculate hypothenuse (square root of the sum)
let c = Math.sqrt(sumOfSquares);
// ------ --------------------- ------ //

// Output
console.log('The hypothenuse is: ' + c);

