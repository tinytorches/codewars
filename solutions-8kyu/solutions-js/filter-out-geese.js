// Filter out the geese
// https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7/train/javascript

// Write a function, gooseFilter / goose-filter / goose_filter / GooseFilter, that takes an array of strings as an argument and returns a filtered array containing the same elements but with the 'geese' removed.
// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.
function gooseFilter(birds) {
    let geese = ['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher'];

    let noGeeseAllowed = birds.filter(goose => !geese.includes(goose));

    return noGeeseAllowed;
}