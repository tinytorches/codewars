// Count of positives / sum of negatives
// Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
// If the input array is empty or null, return an empty array.
function countPositivesSumNegatives(arr) {
    if (arr === null || arr.length < 1) {
        return []
    }
    let countPositivesSumNegativesArr = [0, 0]

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= 0) {
            countPositivesSumNegativesArr[1] += arr[i]
        } else {
            countPositivesSumNegativesArr[0] += 1
        }
    }
    return countPositivesSumNegativesArr
}