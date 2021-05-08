// Convert number to reversed array of digits
// https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
// Example:
// 348597 => [7,9,5,8,4,3]

// Initial solution
const digitize = (n) => {
    return Array.from(String(n), Number).reverse()
}

// Additional solution
const digitize = (n) => {
    return String(n).split('').map(Number).reverse()
}