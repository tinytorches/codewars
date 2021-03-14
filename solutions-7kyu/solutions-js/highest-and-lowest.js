// Highest and Lowest
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
function highAndLow(numbers) {
    splitNum = numbers.split(' ')
    return Math.max.apply(null, splitNum) + ' ' + Math.min.apply(null, splitNum)
}