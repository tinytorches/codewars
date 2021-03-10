// Difference of Volumes of Cuboids
// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.
// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.
// Your function will be tested with pre-made examples as well as random ones.

// weird negative number results for random tests
// function findDifference(a, b) {
//     return a.reduce((a, c) => a * c) - b.reduce((a, c) => a * c)
// }

// solution to pass random test
function findDifference(a, b) {
    let aProduct = a.reduce((a, c) => a * c)
    let bProduct = b.reduce((a, c) => a * c)
    let result = aProduct - bProduct
    if (result < 0) {
        result *= -1
    }
    return result
}

// proper solution is to use Math.abs()
function findDifferenceAbs(a, b) {
    return Math.abs(a.reduce((a, c) => a * c) = b.reduce((a, c) => a * c))
}