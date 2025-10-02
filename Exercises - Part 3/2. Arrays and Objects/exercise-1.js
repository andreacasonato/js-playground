// (Easy) 
// Create an array of your top 5 favorite movies. 
// Log the first and last movie. Add a new movie to the end. 
// Remove the first movie. Log the final array.

let movies = ['the mask', 'spiderman', 'parasite', 'toy story', 'harry potter'];

console.log(movies[0], movies[movies.length - 1]);

movies.push('shrek');

movies.shift();

console.log(movies);