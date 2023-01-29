/* generates dice rolls */
function getDiceRollArray(diceCount) {
    return new Array(diceCount).fill(0).map(() =>
        Math.floor(Math.random() * 6) + 1
    )
}
/* calculate the health percentage for the health bar */
const getPercentage = (remainingHealth, maximumHealth) => 
    (100 * remainingHealth) / maximumHealth
/* generates HTML string to manipulate the DOM to show the dice rolls */
function getDicePlaceholderHtml(diceCount) {
    return new Array(diceCount).fill(0).map(() =>
        `<div class="placeholder-dice"></div>`
    ).join("")
}
/* export the functions to use in other modules */
export { getDiceRollArray, getDicePlaceholderHtml, getPercentage }