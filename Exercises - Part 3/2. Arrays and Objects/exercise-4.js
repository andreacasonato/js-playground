// (Medium) 
// Create an array of objects students, where each object has name, grade, and subject. 
// Write code that:
// (a) Uses map() to create an array of just the student names.
// (b) Uses filter() to create an array of students who have a grade above 90.
// (c) Uses find() to find the first student in the subject "Math".

let students = [
    {
        name: 'Paul',
        grade: '93',
        subject: 'Science',
    },
    {
        name: 'Mary',
        grade: '87',
        subject: 'Math',
    },
    {
        name: 'Thomas',
        grade: '84',
        subject: 'History',
    },
    {
        name: 'Louis',
        grade: '98',
        subject: 'Chemistry',
    },
    {
        name: 'Danielle',
        grade: '85',
        subject: 'Math',
    },
];

// Task (a)
let studentNames = students.map(function (student) {
    return student.name;
});

console.log(studentNames);

// With arrow function
// let studentNames = students.map(student => student.name);
// console.log(studentNames);


// Task (b)
let studentGrade = students.filter(student => Number(student.grade) > 90);
console.log(studentGrade);

// With normal function
// let studentGrade = students.filter(function(student) {
//    return Number(student.grade) > 90;
// });


// Task (c)
let firstStudentMath = students.find(student => student.subject === 'Math');
console.log(firstStudentMath);

// With normal function
// let firstStudentMath = students.find(function(student) {
//    return student.subject === 'Math';
// });