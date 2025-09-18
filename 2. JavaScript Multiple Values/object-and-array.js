// Create an object named people that contains an empty array called friends.
// Create three variables, each containing an object, that contain one of your friend's first names, last names, and an ID value.
// Add the three friends to the friends array.
// Output the people object to the console.

let people = {
    friends: [],
};

let friendOne = {
    firstName: 'Paul',
    lastName: 'Green',
    id: 1,
}

let friendTwo = {
    firstName: 'John',
    lastName: 'Freeman',
    id: 2,
}

let friendThree = {
    firstName: 'Thomas',
    lastName: 'Allen',
    id: 3,
}

people.friends.push(friendOne, friendTwo, friendThree);

console.log(people);
