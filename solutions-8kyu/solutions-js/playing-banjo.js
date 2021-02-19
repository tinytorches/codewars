// Are You Playing Banjo?
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

function areYouPlayingBanjo(name) {
    const nameLower = name.toLowerCase()
    if (nameLower[0] === 'r') {
        return `${name} plays banjo`
    } else {
        return `${name} does not play banjo`
    }
}