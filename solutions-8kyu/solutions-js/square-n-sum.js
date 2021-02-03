// Square(n) Sum
// Complete the square sum function so that it squares each number passed into it and then sums the results together.
function squareSum(numArr){
    let squareArr = numArr.map(x => x ** 2)
    let sum = squareArr.reduce(function(a, b) {
      return a + b
    }, 0)
    return sum
    }