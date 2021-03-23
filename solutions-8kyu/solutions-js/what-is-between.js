// What is between?
// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// initial attempt
function between(a, b) {
    let arr = [];
    for (let i = a; i <= b; i++) {
        return arr.push(i);
    }
}

// Array.from() attempt
const between = (a, b) => Array.from({length: (b - a)})