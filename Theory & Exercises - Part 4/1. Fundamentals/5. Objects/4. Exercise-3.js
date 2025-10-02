// Nested Objects

// Create a user object with nested profile and settings objects
// Access properties from the nested objects
// Add a nested preferences object
// Modify values in nested objects

let user = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    settings: {
        darkMode: true,
    },
    preferences: {
        emailMarketing: true,
        monthlySubscription: false,
    },
};

console.log(user.firstName);
console.log(user.settings.darkMode);
console.log(user["preferences"]["monthlySubscription"]);

// Modifying values
user.age = 21;
user.settings.darkMode = false;
user["preferences"]["monthlySubscription"] = true;

console.log(user)