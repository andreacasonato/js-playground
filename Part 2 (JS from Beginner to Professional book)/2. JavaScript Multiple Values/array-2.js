// Create an empty array to use as a shopping list.
// Add Milk, Bread, and Apples to your list.
// Update "Bread" with Bananas and Eggs.
// Remove the last item from the array and output it into the console.
// Sort the list alphabetically.
// Find and output the index value of Milk.
// After Bananas, add Carrots and Lettuce.
// Create a new list containing Juice and Pop.
// Combine both lists, adding the new list twice to the end of the first list.
// Get the last index value of Pop and output it to the console.
// Your final list should look like this:
// ["Bananas", "Carrots", "Lettuce", "Eggs", "Milk", "Juice", "Pop", "Juice", "Pop"]

let shoppingList = [];

// Add Milk, Bread, and Apples
shoppingList.push('Milk', 'Bread', 'Apples');
console.log(shoppingList);

// Replace Bread with Bananas and Eggs
shoppingList.splice(1, 1, 'Bananas', 'Eggs');
console.log(shoppingList);

// Remove last item and log it
let last = shoppingList.pop();
console.log('Removed from end:', last);

// Sort alphabetically
console.log(shoppingList.sort());

// Find index of Milk
console.log(shoppingList.indexOf('Milk'));

// After Bananas, add Carrots and Lettuce
shoppingList.splice(shoppingList.indexOf('Bananas') + 1, 0, 'Carrots', 'Lettuce');
console.log(shoppingList);

// Create a new list containing Juice and Pop
let weekendList = ['Juice', 'Pop'];

// Combine both lists, adding the new list twice to the end of the first list.
shoppingList = shoppingList.concat(weekendList, weekendList);
console.log(shoppingList);

// Get the last index value of Pop and output it to the console.
console.log(shoppingList.lastIndexOf('Pop'));

// Final list
console.log('Final list:', shoppingList); // ["Bananas", "Carrots", "Lettuce", "Eggs", "Milk", "Juice", "Pop", "Juice", "Pop"]