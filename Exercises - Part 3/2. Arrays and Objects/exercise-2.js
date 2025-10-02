// (Easy) 
// Create an object book with properties title, author, yearPublished, and isAvailable (boolean). 
// Log a sentence using dot notation: "The book [title] by [author] was published in [year]."

let book = {
    title: 'Economics in one lesson',
    author: 'Henry Hazlitt',
    yearPublished: 1988,
    isAvailable: true,
}

console.log(`The book ${book.title} by ${book.author} was published in ${book.yearPublished}.`);