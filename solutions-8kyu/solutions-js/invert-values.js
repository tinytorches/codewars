// Invert values
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
function invert(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * -1
    }
    return arr
}