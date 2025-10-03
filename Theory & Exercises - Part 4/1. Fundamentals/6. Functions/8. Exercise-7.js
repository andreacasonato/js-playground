// Create functions that:
// Calculate total price (price × quantity)
// Create a user profile with validation
// Format a date string from day, month, year
// Calculate body mass index (BMI)


// Calculate total price (price × quantity)

function totalPrice(price, quantity) {
    return price * quantity;
}

console.log(totalPrice(20, 30));


// Create a user profile with validation
function createUserProfile(username, email, age) {
    if (!username || username.length < 3) {
        return "Error: Username must be at least 3 characters long.";
    }
    if (!email.includes("@")) {
        return "Error: Invalid email address.";
    }
    if (age < 0) {
        return "Error: Age must be positive.";
    }

    // If valid, return the user profile object
    return {
        username,
        email,
        age
    };
}

console.log(createUserProfile("Alex", "alex@mail.com", 25));


// Format a date string from day, month, year
function formatDate(day, month, year) {
    const d = String(day).padStart(2, "0");
    const m = String(month).padStart(2, "0");
    return `${d}/${m}/${year}`;
}

console.log(formatDate(3, 10, 2025));


// Calculate body mass index (BMI)
function calculateBMI(weightKg, heightMeters) {
    if (heightMeters <= 0) {
        return "Error: Height must be greater than 0.";
    }
    const bmi = weightKg / (heightMeters ** 2);
    return bmi.toFixed(2);
}
console.log(calculateBMI(65, 1.75));