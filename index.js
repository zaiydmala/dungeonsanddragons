import characterData from './data.js'
import Character from './character.js'

const attack = () => {
    wizard.getDiceHtml();
    orc.getDiceHtml();
    wizard.takeDamage(orc.currentDiceScore);
    orc.takeDamage(wizard.currentDiceScore);
    render();
    if(wizard.dead || orc.dead) {
        endGame();
    }
}

const endGame = () => {
    const endMessage = wizard.dead && orc.dead ?
    "No victors - everyone is dead" :
    orc.dead ? "The Wizard Wins" :
    "The Orc is Victorious";

    const endEmoji = wizard.health > 0 ? "🔮" : "☠️"
    document.body.innerHTML = 
    `<div class="end-game">
        <h2>Game Over</h2>
        <h3>${endMessage}</h3>
        <p class="end-emoji">${endEmoji}</p>
    </div>` 
}


const render = () => {
    document.querySelector('#hero').innerHTML = wizard.getCharacterHtml();
    document.querySelector('#monster').innerHTML = orc.getCharacterHtml();
}
document.querySelector('#attack-button').addEventListener('click', attack)
const wizard = new Character(characterData.hero)
const orc = new Character(characterData.monster)
render()