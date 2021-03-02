// Find the smallest integer in the array
// Given an array of integers your solution should find the smallest integer. 

class SmallestIntegerFinder {
    findSmallestInt(args) {
        let smallestInt = Infinity
        for (let i = 0; i < args.length; i++) {
            if (args[i] < smallestInt) {
                smallestInt = args[i]
            }
        }
        return smallestInt
    }
}