// Higher order function : A function that takes another function as an argument or returns a function as a result is called higher order function.
// Callback function : A function that is passed as an argument to another function is called a callback function.

const square = (x) => x*x

const cube = (sqr,x) => sqr(x)*x

console.log(cube(square, 3)) // 27