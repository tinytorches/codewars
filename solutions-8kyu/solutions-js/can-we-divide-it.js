// Can we divide it?
// Your task is to create functionisDivideBy (or is_divide_by) to check if an integer number is divisible by each out of two arguments.
function isDivideBy(number, a, b) {
    return (number % a === 0) && (number % b === 0) ? true : false
}