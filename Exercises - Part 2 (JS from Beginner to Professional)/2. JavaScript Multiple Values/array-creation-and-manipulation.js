// Create an array called favoriteFoods containing at least 5 of your favorite foods as strings.
// Access the second element in the array and log it.
// Access the last element in the array without hard-coding the index (use the length property) and log it.
// Replace the third element in the array with a new food.
// Add a new food to the end of the array.
// Log the final array and its length to the console.

let favoriteFoods = ['watermelon', 'meat', 'fruits', 'eggs', 'blueberries'];

// Access the second element
console.log(favoriteFoods[1]); // meat

// Access the last element without hardcoding
console.log(favoriteFoods[favoriteFoods.length - 1]); // blueberries

// Replace the third element with a new food
favoriteFoods.splice(2, 1, 'carrots');
console.log(favoriteFoods);

// Replace the third element with a new food (alternative method)
favoriteFoods[2];
console.log(favoriteFoods);

// Add a new food to the end of the array
favoriteFoods.push('burgers');
console.log(favoriteFoods);

// Log the final array and its length
console.log('Final array:', favoriteFoods); // ['watermelon', 'meat', 'carrots', 'eggs', 'blueberries', 'burgers'];
console.log('Array length:', favoriteFoods.length); // Array length: 6