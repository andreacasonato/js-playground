// Adding & Modifying Properties

// Create a phone object with just brand and model
// Add properties: color, storage, price
// Update the price property
// Add is5G: true property


let phone = {
    brand: "iPhone",
    model: "SE",
}

console.log(phone.color = "red"); // dot notation
console.log(phone["storage"] = "128gb"); // bracket notation
console.log(phone.price = 299);
console.log(phone.is5G = true);

console.log(phone);
