// Removing Properties

// Create an account object with 5 properties
// Remove two properties using delete
// Remove one property using bracket notation with delete
// Check which properties remain

let account = {
    username: "john_doe",
    email: "john@example.com",
    password: "secret123",
    age: 30
};

delete account.age;
delete account.password;
delete account["email"];

console.log(account);