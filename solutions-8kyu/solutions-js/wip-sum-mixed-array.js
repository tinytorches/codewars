// Sum Mixed Array
// https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/javascript

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.

// Solution
const sumMix = (arr) => {
    return arr.map(a => + a).reduce((a, c) => a + c)
}

// Additional solution
const sumMix = (arr) => {
    let result = 0
    for (let n of arr) {
        result += parseInt(n)
    }
    return result
}