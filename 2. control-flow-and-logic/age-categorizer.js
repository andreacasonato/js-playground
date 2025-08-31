let age = 30;

if (age < 0) {
    console.log('Please enter a valid number');
} else if (age <= 12) {
    console.log('Child');
} else if (age <= 19) {
    console.log('Teen');
} else if (age <= 64) {
    console.log('Adult');
} else console.log('Senior');

// Adult