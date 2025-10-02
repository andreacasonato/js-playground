// Helper Function 1: Splits a full name string into an array of names.
const splitName = (fullName) => {
    return fullName.split(' ');
};

// Helper Function 2: Capitalizes the first and last names.
const capitalizeName = (firstName, lastName) => {
    // Correct way to capitalize a string:
    // 1. Get the first character and convert it to uppercase.
    // 2. Get the rest of the string using slice(1).
    let capitalizedFirstName = firstName[0].toUpperCase() + firstName.slice(1);
    let capitalizedLastName = lastName[0].toUpperCase() + lastName.slice(1);
    return [capitalizedFirstName, capitalizedLastName];
};

// Helper Function 3: Joins the first and last name back into a full name string.
const getFullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`;
};

// Master Function: This is the main function that coordinates all the others.
const formatName = (fullName) => {
    // Step 1: Split the full name into an array.
    const nameArray = splitName(fullName);

    // Step 2: Use the elements from the array to capitalize the names.
    const [firstName, lastName] = nameArray;
    const capitalizedNames = capitalizeName(firstName, lastName);

    // Step 3: Join the capitalized names back into a single string.
    const formattedName = getFullName(capitalizedNames[0], capitalizedNames[1]);

    // Step 4: Return the final, formatted name.
    return formattedName;
};

let name = 'john doe';

// We only call the master function, which handles all the work inside.
console.log(formatName(name)); // Prints "John Doe"