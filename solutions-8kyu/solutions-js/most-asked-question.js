// The most asked question on CodeWars
// What is the most asked question on CodeWars?
// You need to write a function detect that will check if a string starts with Can someone explain, case sensitive. Return true if so, false otherwise.
function detect(comment) {
    if (comment.startsWith('Can someone explain')) {
        return true
    } else {
        return false
    }
}