// Array plus array
// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.
// P.S. Each array includes only integer numbers. Output is a number too.

const arrayPlusArray = (arr1, arr2) => {
    let redArr1 = arr1.reduce((acc, curr) => acc + curr)
    let redArr2 = arr2.reduce((acc, curr) => acc + curr)

    let arrSum = redArr1 + redArr2
    return arrSum
}

