let email = null;
let phoneNumber;
let userBio = "    I am learning JavaScript        ";

console.log(email); // null
console.log(phoneNumber); // undefined
console.log(userBio.trim()); // I am learning JavaScript
console.log(userBio.trim().toUpperCase()); // I AM LEARNING JAVASCRIPT
console.log(userBio.includes('JavaScript')); // true