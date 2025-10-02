let age = 60;
let isStudent = false;
let hasCoupon = false;

if (isStudent && hasCoupon) {
    console.log('You are eligible for a 25% discount!')
} else if (age > 50 || hasCoupon) {
    console.log('You are eligible for a 15% discount!')
} else {
    console.log('Sorry, no discount this time!')
}

// ----------------------------------------- //

let newAge = 60;
let enrolledStudent = false;
let coupon = false;

if (newAge > 65 || (enrolledStudent && coupon)) {
    console.log("You are eligible for the discount.");
} else {
    console.log("You are not eligible for the discount.");
}