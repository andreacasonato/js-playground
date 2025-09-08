let personalProfile = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    hobbies: ['coding', 'playing tennis', 'reading'],
}
console.log(personalProfile.firstName);
// print the first name using dot notation 

let propertyToAccess = 'age';
console.log(personalProfile[propertyToAccess]);
// // print the age using bracket notation 

console.log(personalProfile.hobbies);
// print the hobbies array using dot notation 

propertyToAccess = 'hobbies';
console.log(personalProfile[propertyToAccess]);
// print the hobbies array using bracket notation 
