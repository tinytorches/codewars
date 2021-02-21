// Fake Binary
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'.
// Return the resulting string.
function fakeBin(str) {
    let binary = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] < '5') {
            binary += '0'
        } 
        
        if (str[i] >= '5') {
            binary += '1'
        }
    }
    return binary
}