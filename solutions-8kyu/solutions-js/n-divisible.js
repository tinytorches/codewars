// Is n divisible by x and y?   
// Create a function that checks if a number (n) is divisible by two numbers x AND y.
// All inputs are positive, non-zero digits
function isDivisible(num, x, y) {
    if (num % x === 0 && num % y === 0) {
        return true
    } else {
        return false
    }
}