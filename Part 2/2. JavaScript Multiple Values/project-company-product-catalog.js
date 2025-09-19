// Create an array to hold an inventory of store items.
// Create four items, each having the properties of name, model, cost, and quantity.
// Add all four objects to the main array using an array method, and then log the inventory array to the console.
// Access the quantity element of your four item, and log it to the console. Experiment by adding and accessing more elements within your data structure.

let items = [

];

phone = {
    name: 'samsung',
    model: 'galaxy',
    cost: 500,
    quantity: 150,
};

washingMachine = {
    name: 'bosch',
    model: 'wan2408ii',
    cost: 400,
    quantity: 50,
};

fridge = {
    name: 'samsung',
    model: 'rt53dg7a14s9',
    cost: 940,
    quantity: 30,
};

riceCooker = {
    name: 'zojirushi',
    model: 'ns-zcc18',
    cost: 190,
    quantity: 70,
};

items.push(phone, washingMachine, fridge, riceCooker);

console.log(items);
// [
//   { name: 'samsung', model: 'galaxy', cost: 500, quantity: 150 },
//   { name: 'bosch', model: 'wan2408ii', cost: 400, quantity: 50 },
//   { name: 'samsung', model: 'rt53dg7a14s9', cost: 940, quantity: 30 },
//   { name: 'zojirushi', model: 'ns-zcc18', cost: 190, quantity: 70 }
// ]

console.log(items[3].quantity);
// 70

console.log(items[1].model);
// 'wan2408ii'