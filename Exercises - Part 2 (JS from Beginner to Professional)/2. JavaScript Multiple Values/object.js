// Create a new myCar object for a car. Add some properties, including (but not limited to) make and model, and values for a typical car or your car. Feel free to use booleans, strings, or numbers.
// Create a variable that can hold the string value color. This variable containing a string value color can now be used to reference the property name within myCar. 
// Then, use the variable within the square bracket notation to assign a new value to the color property in myCar.
// Use that same variable and assign a new property string value to it, such as forSale. Use the bracket notation once again to assign a new value to the forSale property to indicate whether the car is available for purchase.
// Output make and model into the console.
// Output the value of forSale into the console.

let myCar = {
    make: 'toyota',
    model: 'prius',
    year: 2025,
    isHybrid: true,
    color: 'pearl',
    forSale: true,
}

// Variable holding the property name
let colorProp = 'color';

// Use variable + bracket notation to change color
myCar[colorProp] = 'black';

// Use same variable (reassigned) for another property
colorProp = 'forSale';
myCar[colorProp] = false;

// Output make and model
console.log(myCar.make, myCar.model); // toyota prius

// Output forSale
console.log(myCar['forSale']); // false