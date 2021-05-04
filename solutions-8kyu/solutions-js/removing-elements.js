// Removing Elements
// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Initial solution
const removeEveryOther = (arr) => {
    return arr.filter((a, i) => i % 2 === 0)
}

// Alternative solution
const removeEveryOther = (arr) => {
    return arr.filter((elem, index) => {
        return index % 2 === 0
    })
}