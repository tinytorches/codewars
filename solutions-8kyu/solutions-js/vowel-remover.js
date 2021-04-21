// Vowel remover
// Create a function called shortcut to remove all the lowercase vowels in a given string.
const shortcut = (string) => {
    // const vowelArr = ['a', 'e', 'i', 'o', 'u'] 
    let lettersArr = string.split('')
    let shortString = []

    for (let i = 0; i < lettersArr.length; i++) {
        if (lettersArr[i] === 'a' || lettersArr[i] === 'e' || lettersArr[i] === 'i' || lettersArr[i] === 'o' || lettersArr[i] === 'u') {
            lettersArr.splice(lettersArr[i], 1, '')
        } else {
            shortString.push(lettersArr[i])
        }
      }
        return shortString.join('').toString()
    }