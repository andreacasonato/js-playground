let total = 0;

for (let i = 1; i <= 10; i++) {
    total = total + i; // total += i;
}

console.log(total);

// Total is 55.

// Turn 1: i is 1. total becomes 0 + 1, which is 1.
// Turn 2: i is 2. total becomes 1 + 2, which is 3.
// Turn 3: i is 3. total becomes 3 + 3, which is 6.
// Turn 4: i is 4. total becomes 6 + 4, which is 10.