// repeatIt
// https://www.codewars.com/kata/557af9418895e44de7000053/train/javascript

// Create a function that takes a string and an integer (n).
// The function should return a string that repeats the input string n number of times.
// If anything other than a string is passed in you should return "Not a string"

const repeatIt = ( str, n ) => {
    return typeof str === 'string' ? str.repeat(n) : 'Not a string'
}