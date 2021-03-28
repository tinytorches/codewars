// Get the Nth Even Number
function nthEven(n) {
    let result = 0
    let let j = 0

    for ( let i = 0; i < n; i++ ) {
        j += 2
    }
    return (n * 2) - 2 
}