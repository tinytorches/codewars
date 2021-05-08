// Sum Mixed Array
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.

// Initial attempt
const sumMix = (int) => {
    let numArr = Number(int)
    console.log(numArr)
    // numArr.reduce((acc, currVal) => acc + currVal)
}

// look through array and convert strings into integers
// reduce the array to receive the sum
// return the sum

const sumMix = (arr) => {
    let parseArr = []
    for ( let i = 0; i <= arr.length; i++ ) {
        if ( isNaN(arr[i]) ) {
            arr.push(parseInt(i))
        }
    }
    return parseArr.reduce((a, c) => a + c)
}