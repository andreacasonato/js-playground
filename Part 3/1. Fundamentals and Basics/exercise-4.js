// (Medium)
// Simulate a simple shopping cart.
// You have bought 3 items costing $9.99, $5.45, and $12.99.
// Calculate the total cost.
// Then, imagine a $5 discount is applied.
// Calculate the new total.
// Finally, log a message formatted like a receipt using template literals, showing the original total, the discount,
// and the new total, all formatted to 2 decimal places (e.g., $28.43).

const itemOne = 9.99;
const itemTwo = 5.45;
const itemThree = 12.99;

let totalPrice = itemOne + itemTwo + itemThree;

let discount = 5;

let discountedPrice = totalPrice - discount;

console.log(`The original total is $${totalPrice.toFixed(2)}. 
Your today's discount is $${discount.toFixed(2)}. 
Your new total is $${discountedPrice.toFixed(2)}.`);