// Sum of positive
// You get an array of numbers, return the sum of all of the positive ones.
// Note: if there is nothing to sum, the sum is default to 0

// solution 01
function positiveSum(arr) {
    const reducer = (a, c) => a + (c > 0 ? c : 0)
    return arr.reduce(reducer, 0)
}

// solution 02
function positiveSum(arr) {
    return arr.reduce((a, c) => a + (c > 0 ? a + c : a), 0)
}

// solution 03
const positiveSum = arr => arr.reduce((a, c) => c > 0 ? a + c : a, 0)