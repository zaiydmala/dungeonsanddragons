import {getDiceRollArray} from '/utilities.js'

function Character(data) {
    Object.assign(this, data)

    this.getDiceHtml = (diceCount) => { return getDiceRollArray(diceCount).map(x => x = `<div class="dice">${x}</div>`).join('') }

    this.getCharacterHtml = () => {
        const { elementId, name, avatar, health, diceCount } = this;      
        let diceHtml = this.getDiceHtml(diceCount);
        
        return  `<div class="character-card">
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}" />
                <div class="health">health: <b> ${health} </b></div>
                <div class="dice-container">
                    ${diceHtml}
                </div>
            </div>`;
    }  
}

export default Character