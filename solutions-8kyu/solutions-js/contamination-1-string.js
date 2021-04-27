// Contamination #1 -String-
// An AI has infected a text with a character!! 
// This text is now fully mutated to this character.
// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!
// Note: The character is a string of length 1 or an empty string.

// Initial solution
const contamination = (text, char) => {
    if (text === '' || char === '') {
        return ''
    } else if (char !== '') {
        return char.repeat(text.length)
    } else {
        return 'Nothing is going on!'
    }
}

// Refactored solution
const contamination = (text, char) => {
    return char.repeat(text.length)
}