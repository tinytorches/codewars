// Rock Paper Scissors!
// https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/javascript

// Let's play! You have to return which player won! In case of a draw return Draw!.

const rps = ( p1, p2 ) => {
    if ( p1 === p2 ) {
        return 'Draw!'
    } else if ( p1 === 'rock' && p2 === 'scissors' ) {
        return 'Player 1 won!'
    } else if ( p1 === 'scissors' && p2 === 'paper' ) {
        return 'Player 1 won!'
    } else if ( p1 === 'paper' && p2 === 'rock' ) {
        return 'Player 1 won!'
    } else if ( p1 === 'scissors' && p2 === 'rock' ) {
        return 'Player 2 won!'
    } else if ( p1 === 'paper' && p2 === 'scissors' ) {
        return 'Player 2 won!'
    } else if ( p1 === 'rock' && p2 === 'paper' ) {
        return 'Player 2 won!'
    }
}

// Alternative solution
const rps = ( p1, p2 ) => {
    if ( p1 === p2 ) return "Draw!";
    
    let rules = { rock: "scissors", paper: "rock", scissors: "paper" }
    
    if ( p2 === rules[p1] ) {
      return "Player 1 won!"
    }
    else {
      return "Player 2 won!"
    }
  }