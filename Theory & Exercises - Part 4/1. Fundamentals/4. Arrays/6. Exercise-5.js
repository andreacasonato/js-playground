// Multi-dimensional Array
// let grid = [
//     ["X", "O", "X"],
//     ["O", "X", "O"],
//     ["X", "O", "X"]
// ];
// Access the center element
// Get the first row
// Get the last column
// Change the top-left element to "A"

let grid = [
    ["X", "O", "X"],
    ["O", "X", "O"],
    ["X", "O", "X"]
];

console.log(grid[0]);
console.log(grid[0][2], grid[1][2], grid[2][2]);

grid[0][0] = "A";
console.log(grid);