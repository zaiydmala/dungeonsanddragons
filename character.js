import {getDiceRollArray, getDicePlaceholderHtml} from './utilities.js'

const getPercentage = (remainingHealth, maximumHealth) => (100 * remainingHealth) / maximumHealth;

function Character(data) {
    Object.assign(this, data);

    this.diceArray = getDicePlaceholderHtml(this.diceCount);
    this.maxHealth = this.health;

    this.takeDamage = (attackScoreArray) => {
                const totalAttackScore = attackScoreArray.reduce((total, roll) => total + roll);
                this.health -= totalAttackScore;
                if(this.health <= 0){
                    this.dead = true;
                    this.health = 0
                }
    }

    this.getHealthBarHtml = () => {
        const percent = getPercentage(this.health, this.maxHealth);
        console.log(percent);
    }
    
    this.getDiceHtml = function() {
        this.currentDiceScore = getDiceRollArray(this.diceCount);
        this.diceArray = this.currentDiceScore.map(x => `<div class="dice">${x}</div>`).join('');
    } 

    this.getCharacterHtml = () => {
        const { elementId, name, avatar, health, diceCount, diceArray } = this;      
        let diceHtml = this.getDiceHtml(diceCount);
        const healthBar = this.getHealthBarHtml();
        
        return  `<div class="character-card">
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}" />
                <div class="health">health: <b> ${health} </b></div>
                <div class="dice-container">
                    ${diceArray}
                </div>
            </div>`
    }  
}

export default Character