// Sum Arrays
// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Initial solution
function sum(arr) {
    if (arr === []) {
        return 0
    } else {
        return arr.reduce((a, c) => a + c, 0)
    }
}

// Additional solution
const sum = (numbers) => {
    return numbers.reduce((a, c) => a + c, 0)
}