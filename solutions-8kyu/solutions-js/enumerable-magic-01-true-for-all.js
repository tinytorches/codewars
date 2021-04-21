// Enumerable Magic #1 - True for All?
// Create a method all which takes an array and a predicate (function pointer), and returns true if the predicate returns true for every element in the array. Otherwise, it should return false. If the array is empty, it should return true, since technically nothing failed the test.
const all = (arr, fun) => {
    for (let i = 0; i < arr.length; i++) {
        if (!fun(arr[i])) {
            return false
        }
    }
    return true
}