// Count by X
// Create a function with two arguments that will return an array of the first (n) multiples of (x). 
// Assume both the given number and the number of times to count will be positive numbers greater than 0. 
// Return the results as an array (or list in Python, Haskell or Elixir).

// Initial solution
const countBy = (x, n) => {
    let arr = [] 
    for (i = x; i <= x * n; i += x) {
        arr.push(i)
    }
    return arr
}

// Alternative solution
const countBy = (x, n) => {
    let arr = []
    for (i = 1; i <= n; i++) {
        arr.push(x * i)
    }
    return arr
}