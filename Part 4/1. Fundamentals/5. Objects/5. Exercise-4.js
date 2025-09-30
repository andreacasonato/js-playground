// Property Existence & Object Methods

// Check if these properties exist: name, color, inStock
// Get all keys from the product object
// Get all values from the product object
// Check if rating property exists (it doesn't)

let product = {
    name: "Laptop",
    price: 999,
    inStock: true
};

console.log(Object.keys(product));
console.log(Object.values(product));
console.log("rating" in product);