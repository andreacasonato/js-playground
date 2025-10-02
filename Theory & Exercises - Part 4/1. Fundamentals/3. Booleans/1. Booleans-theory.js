// Booleans are one of JavaScript's primitive data types that represent true or false values. 
// They're essential for controlling program flow and making decisions.

// BOOLEAN VALUES
// true  --> This means "yes" or "correct"
// false --> This means "no" or "incorrect"

// CREATING BOOLEANS
let isActive = true;
let isCompleted = false;
let hasPermission = true;

// ======================================== //

// BOOLEAN OPERATIONS

// Comparison Operators
// Equality Checks:
5 == 5    // true (loose equality)
5 == "5"  // true (type conversion happens)
5 === 5   // true (strict equality)
5 === "5" // false (different types)

// Inequality Checks:
10 != 8     // true
10 != "10"  // false (loose)
10 !== "10" // true (strict)

// Greater/Less Than:
5 > 3   // true
5 < 3   // false
5 >= 5  // true
5 <= 4  // false

// String Comparisons
"apple" == "apple"   // true
"apple" == "banana"  // false
"a" < "b"            // true (alphabetical order)
"apple" > "banana"   // false

// THE BOOLEAN() FUNCTION
// Convert other values to booleans:

Boolean(true)     // true
Boolean(false)    // false
Boolean(0)        // false
Boolean(1)        // true
Boolean("hello")  // true
Boolean("")       // false

// ======================================== //

// TRUTHY AND FALSY VALUES

// Falsy Values (become false): 
// false
// 0
// "" (empty string)
// null
// undefined
// NaN

// Truthy Values (become true):
// true
// 1, -1, 100 (any non-zero number)
// "hello", "false", "0" (any non-empty string)
// [] (empty array)
// {} (empty object)

// ======================================== //

// LOGICAL OPERATORS

// AND Operator (&&)
true && true    // true
true && false   // false
false && true   // false
false && false  // false

// OR Operator (||)
true || true    // true
true || false   // true
false || true   // true
false || false  // false

// NOT Operator (!)
!true   // false
!false  // true
!!true  // true (double negative)

// ======================================== //

// PRACTICAL EXAMPLES

// Basic Comparisons
let age = 25;
let hasLicense = true;

age >= 18 && hasLicense        // true (can drive)
age < 16 || age > 65          // false (not in special age groups)
!(age < 18)                   // true (is not under 18)

// String Boolean Operations
let username = "john";
let email = "john@email.com";

username.length > 0           // true (username is not empty)
email.includes("@")           // true (email contains @)
username === "john"           // true

// ======================================== //

// BOOLEAN METHODS WITH STRINGS

// String Methods Returning Booleans
let text = "Hello World";

text.includes("Hello")        // true
text.startsWith("Hello")      // true  
text.endsWith("World")        // true
text.includes("JavaScript")   // false