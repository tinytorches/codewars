// Well of Ideas - Easy Version
// For every good kata idea there seem to be quite a few bad ones!
// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

const well = (arr) => {
    let goodIdeas = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'good') {
            goodIdeas++
        }
    }
    if (goodIdeas > 2) {
        return 'I smell a series!'
    } else if (goodIdeas > 0) {
        return 'Publish!'
    } else {
        return 'Fail!'
    }
}