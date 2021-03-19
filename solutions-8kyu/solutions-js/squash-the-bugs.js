// Squash the bugs
// Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length of the longest word, as a number.
// There will only be one 'longest' word.
function findLongest(str) {
    const stringSplit = str.split(' ')
    let longest = 0
    
    for (let i = 0; i < stringSplit.length; i++) {
        if (stringSplit[i].length > longest) {
            longest = stringSplit[i].length
        }
    }
    return longest
} 