// Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe
// You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.
// Your task is to return the number of JavaScript developers coming from Europe.

// Initial pseudocode with incomplete solution
const countDevelopers = (list) => {
    // declare counter variable
    let counter = 0
    // loop through array
    for (i = 0; i <= list.length; i++) {
        // compare if continent and language
        if (list[i].continent === 'Europe' && list[i].language === 'JavaScript') {
            // add 1 to counter variable
            counter += 1
        }
    }
    // return variable
    return counter
}

// Alternate solution
const countDevelopers = (list) => {
    return list.filter(developer => developer.continent === 'Europe' && developer.language === 'JavaScript').length
}