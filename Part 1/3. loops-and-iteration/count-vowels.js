let word = 'honorificabilitudinitatibus';
let wordCounter = 0;

for (let char of word) {
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
        wordCounter++; // wordCounter = wordCounter + 1
    }
}

console.log(wordCounter); // 13