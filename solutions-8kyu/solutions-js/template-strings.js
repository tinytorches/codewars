// Template strings
//  Your task is to return the correct string using the Template String Feature. 
// Input:  Two Strings, no validation is needed. 
// Output:  You must output a string containing the two strings with the word ```' are '```

// Intial solution
const templateStrings = (string1, string2) => {
    return `${string1} are ${string2}` 
}

// Format to pass test
const TempleStrings = function(obj, feature) {
    return `${obj} are ${feature}` 
  }