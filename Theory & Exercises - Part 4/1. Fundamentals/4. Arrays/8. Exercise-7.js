// Shopping List
// let shoppingList = ["milk", "eggs", "bread"];
// Add "butter" to the list
// Remove "eggs" from the list
// Sort the list alphabetically
// Convert to: "bread, butter, and milk"

shoppingList = ["milk", "eggs", "bread"];

shoppingList.push("butter");
shoppingList.splice(shoppingList.indexOf("eggs"), 1);
shoppingList.sort();

// let finalList = shoppingList.slice(0, -1).join(", ") + ", and " + shoppingList[shoppingList.length - 1];

// Copy all items except the last
let allButLast = shoppingList.slice(0, shoppingList.length - 1);

// Join them with commas
let firstPart = allButLast.join(", ");

// Get the last item
let lastItem = shoppingList[shoppingList.length - 1];

// Combine with "and"
let finalList = firstPart + ", and " + lastItem;

console.log(finalList);
console.log(shoppingList);