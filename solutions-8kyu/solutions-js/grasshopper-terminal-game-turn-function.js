// Grasshopper - Terminal Game Turn Function
// https://www.codewars.com/kata/56019d3b2c39ccde76000086

// Terminal game turn function
// You are creating a text-based terminal version of your favorite board game. In the board game, each turn has six steps that must happen in this order: roll the dice, move, combat, get coins, buy more health, and print status.

// Initial solution
const doTurn = () => {
    rollDice()
    move()
    combat()
    getCoins()
    buyHealth()
    printStatus()
}