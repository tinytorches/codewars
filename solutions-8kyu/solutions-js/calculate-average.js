// Calculate average
// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0
function find_average(arr) {
    let result = 0
    result = (arr.reduce((a, c) => a + c)) / arr.length
    return result
}