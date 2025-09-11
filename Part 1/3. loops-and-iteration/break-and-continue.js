for (i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    } else console.log(i)
}

// 1, 2, 3, 4, 6, 7, 8, 9, 10


for (i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    } console.log(i)
}

// 1, 2, 3, 4, 6, 7, 8, 9, 10
// Same result, without 'else' keyword