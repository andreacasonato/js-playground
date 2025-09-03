for (let i = 1; i <= 5; i++) {
    let row = ''; // handles rows (accumulator)
    for (let j = 1; j <= i; j++) {
        row += '*'; // handles stars (accumulator)
    }
    console.log(row);
}

// *
// **
// ***
// ****
// *****