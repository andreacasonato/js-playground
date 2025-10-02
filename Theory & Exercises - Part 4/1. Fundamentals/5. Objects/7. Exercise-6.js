// Object Shorthand

// Create variables: productName, productPrice, productCategory
// Use shorthand to create a product object
// Create variables for book properties and use shorthand
// Mix regular properties and shorthand in one object

let productName = "MacBook";
let productPrice = "599";
let productCategory = "laptop";

let newProduct = { productName, productPrice, productCategory };
console.log(newProduct);

// --------------------------------- // 

let bookTitle = "Computer Science: An Overview";
let bookAuthor = ["J. Glenn Brookshear", "Dennis Brylow"];
let bookPrice = 45;

let book = { bookTitle, bookAuthor, bookPrice };
console.log(book);

// --------------------------------- // 

let mixedObject = {
    bookTitle,
    bookAuthor,
    rating: 4.9,
    inStock: true,
};

console.log(mixedObject);