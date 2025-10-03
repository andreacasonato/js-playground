// Create functions that:
// Create a person object from name and age
// Return the full name from a person object
// Check if a person is an adult (18+)
// Create a product object with name, price, and inStock


// Create a person object from name and age
function createPerson(firstName, lastName, age) {
    return {
        firstName: firstName,
        lastName: lastName,
        age: age,
    };
}

// Return the full name from a person object
function getFullName(person) {
    return `${person.firstName} ${person.lastName}`;
}

// Check if a person is an adult (18+)
function isAdult(person) {
    return person.age >= 18;
}

// Create a product object with name, price, and inStock
function createProduct(itemName, itemPrice, inStock) {
    return {
        itemName: itemName,
        itemPrice: itemPrice,
        inStock: inStock,
    }
};


// Example usage:
const p1 = createPerson("Andrew", "Doe", 20);
console.log(getFullName(p1));
console.log(isAdult(p1));

const product1 = createProduct("iPhone", 500, true);
console.log(product1);