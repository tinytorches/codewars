// Check the exam
// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers. 
// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).
// If the score < 0, return 0.

const checkExam = (array1, array2) => {
    let studentScore = 0
    for ( let i = 0; i = array1.length; i++ ) {
        if ( array1[i] === array2[i]) {
            studentScore += 4
        } else if ( array1[i] !== array2[i] ) {
            studentScore -= 1
        } else {
            studentScore += 0
        }
        return studentScore
    }
}
// Can't use if...else statement cause it will stop once it reaches the first conditional and/or number comparison in the arrays.