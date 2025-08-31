let grade = 32;

if (grade >= 90 && grade <= 100) {
    console.log('Your grade is A');
} else if (grade >= 80 && grade <= 89) {
    console.log('Your grade is B');
} else if (grade >= 70 && grade <= 79) {
    console.log('Your grade is C');
} else if (grade >= 60 && grade <= 69) {
    console.log('Your grade is D');
} else if (grade >= 0 && grade <= 59) {
    console.log('Your grade is F');
} else console.log('Please enter a score from 0 to 100');


// Second solution: better syntax

let score = 97;

if (score > 100 || score < 0) {
    console.log('Please enter a grade between 0 and 100')
} else if (score >= 90) {
    console.log('Your grade is A');
} else if (score >= 80) {
    console.log('Your grade is B');
} else if (score >= 70) {
    console.log('Your grade is C');
} else if (score >= 60) {
    console.log('Your grade is D');
} else
    console.log('Your grade is F');
