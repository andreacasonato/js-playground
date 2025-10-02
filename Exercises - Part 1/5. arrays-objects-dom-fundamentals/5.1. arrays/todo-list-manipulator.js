let myTodos = ['buy groceries', 'read a book', 'go for a run'];

myTodos.push('practice javascript');

const indexOfTodosToRemove = myTodos.indexOf('buy groceries');

// Use the found index to remove the item with splice()
// The first argument is the index to start at.
// The second is the number of items to remove (just 1 in this case).
if (indexOfTodosToRemove !== -1) {
    myTodos.splice(indexOfTodosToRemove, 1);
}
// splice() takes two arguments:
// the starting index to remove from, and the number of items to remove.

console.log(myTodos.includes('buy groceries'));

console.log(myTodos); // read a book, go for a run, practice javascript;