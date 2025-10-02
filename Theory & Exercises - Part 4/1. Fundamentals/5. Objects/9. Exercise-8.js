// Mixed Data Types in Objects
// Create an object that contains at least 6 different data types
// Access each property
// Add a new property with an array value
// Add a new property with another object as value

let mixedObject = {
    string: "Hello World",
    number: 42,
    boolean: true,
    array: [1, 2, 3],
    nestedObject: {
        key: "value"
    },
    nullValue: null,
    undefinedValue: undefined
};

console.log(mixedObject.string);
console.log(mixedObject.number);
console.log(mixedObject.boolean);
console.log(mixedObject.array);
console.log(mixedObject.nestedObject.key);
console.log(mixedObject.nullValue);
console.log(mixedObject.undefinedValue);

mixedObject.newArray = ["carrots", "watermelons", "garlic"];
mixedObject.newObject = { temp: 30, city: "London" };

console.log(mixedObject);