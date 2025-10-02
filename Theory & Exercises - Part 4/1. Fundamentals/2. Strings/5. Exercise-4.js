// PASSWORD CHECKER
// Check if these passwords meet basic requirements (at least 8 characters, has both upper and lower case):
// "weak"
// "STRONG123"
// "GoodPass123"

let password1 = "weak";
let password2 = "STRONG123";
let password3 = "GoodPass123";

console.log("Password:", password1);
console.log(password1.length >= 8); // length at least 8 chars?
console.log(password1 !== password1.toLowerCase()); // has uppercase?
console.log(password1 !== password1.toUpperCase()); // has lowercase?

console.log("Password:", password2);
console.log(password2.length >= 8);
console.log(password2 !== password2.toLowerCase());
console.log(password2 !== password2.toUpperCase());

console.log("Password:", password3);
console.log(password3.length >= 8);
console.log(password3 !== password3.toLowerCase());
console.log(password3 !== password3.toUpperCase());

