// Beginner Series #3 Sum of Numbers
// Given two integers a and b, which can be positive or negative, find the sum of all the integers between including them too and return it. If the two numbers are equal return a or b.
// Note: a and b are not ordered!

// loop to count from a > b
// push those numbers into an array
// reduce to find the sum
// return the sum

const getSum = (a, b) => {
    [a, b] = a > b ? [b, a] : [a, b]
    
    let result = 0
    
    while (a <= b) {
      result += a
      a++
    }
    
    return result
  }