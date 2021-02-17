// Abbreviate a Two Word Name
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this: Sam Harris => S.H or Patrick Feeney => P.F
function abbrevName(name) {
    const arr = name.split(' ')
    const firstName = arr[0]
    const lastName = arr[1]
    const initials = `${firstName[0]}.${lastName[0]}`.toUpperCase()
    return initials
}