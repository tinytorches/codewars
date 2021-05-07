// Grasshopper - Array Mean
// https://www.codewars.com/kata/55d277882e139d0b6000005d

// Find Mean
// Find the mean (average) of a list of numbers in an array.
// Information
// To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.

const findAverage = (nums) => {
    return nums.reduce( (a, c) => a + c ) / nums.length
}
