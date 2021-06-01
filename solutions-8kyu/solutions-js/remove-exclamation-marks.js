// Remove exclamation marks
// https://www.codewars.com/kata/57a0885cbb9944e24c00008e

// Write function removeExclamationMarks which removes all exclamation marks from a given string.

const removeExclamationMarks = ( s ) => {
    return s.split('!').join('')
}

// Alternative solution
const removeExclamationMarks = ( s ) => {
    return s.replace( /!/gi, '' )
}