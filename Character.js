//importing functions needed for dice mechanics and health calculations
import { getDiceRollArray, getDicePlaceholderHtml, getPercentage } from './utilities.js'


class Character {
    constructor(data) {
        Object.assign(this, data)   // copy constructor
        this.maxHealth = this.health
        this.diceHtml = getDicePlaceholderHtml(this.diceCount)  
    }
    /* DOM manipulation to display the dice rolls */
    setDiceHtml = function() {
        this.currentDiceScore = getDiceRollArray(this.diceCount)
        this.diceHtml = this.currentDiceScore.map((num) =>
            `<div class="dice">${num}</div>`).join("")
    }
    /* calculates damage taken equal to the opponent's dice rolls */
    takeDamage = function (attackScoreArray) {
        const totalAttackScore = attackScoreArray.reduce((total, num) => total + num)
        this.health -= totalAttackScore
        if (this.health <= 0) {
            this.dead = true
            this.health = 0
        }
    }
    /* generate a dynamic health bar that turns red when health =<25% */
    getHealthBarHtml = function () {
        const percent = getPercentage(this.health, this.maxHealth)
        return `<div class="health-bar-outer">
                    <div class="health-bar-inner ${percent < 26 ? "danger" : ""}" 
                            style="width:${percent}%;">
                    </div>
                </div>`  
    }
    /* create character cards */
    getCharacterHtml = function () {
        const { elementId, name, avatar, health, diceCount, diceHtml } = this
        const healthBar = this.getHealthBarHtml()
        return `
            <div class="character-card">
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}" />
                <div class="health">health: <b> ${health} </b></div>
                ${healthBar}
                <div class="dice-container">
                    ${diceHtml}
                </div>
            </div>`
    }
}

export default Character
