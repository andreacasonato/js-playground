// Create variables for three numbers: a, b, and c.
// Update these variables with the following actions using the assignment operators:
// - Add b to a
// - Divide a by c
// - Replace the value of c with the modulus of c and b
// - Print all three numbers to the console

let a = 10;
let b = 5;
let c = 2;

a += b;
a /= c;
c %= b;

console.log('a:', a); // a: 7.5
console.log('b:', b); // b: 5
console.log('c:', c); // c: 2