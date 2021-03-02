// Color Ghost
// Create a class Ghost
// Ghost objects are instantiated without any arguments.
// Ghost objects are given a random color attribute of white" or "yellow" or "purple" or "red" when instantiated
class Ghost {
    constructor() {
      this.color = function() {
        let randomColor = Math.random()
        if (randomColor < .25) {
            return 'white'
        } else if (randomColor < .5) {
            return 'yellow'
        } else if (randomColor < .75) {
            return 'purple'
        } else {
            return 'red'
        }   
      }
    }
}

// white
// yellow
// purple
// red

let Ghost = function() {
    let colors = ['white', 'yellow', 'purple', 'red']
    let colorIndex = Math.floor(Math.random() * colors.length)
    this.color = colors[colorIndex]
}