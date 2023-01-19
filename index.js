import characterData from '/data.js'
import Character from '/character.js'

function render() {
    document.querySelector('#hero').innerHTML = wizard.getCharacterHtml();
    document.querySelector('#monster').innerHTML = orc.getCharacterHtml();
}

const wizard = new Character(characterData.hero)
const orc = new Character(characterData.monster)
render()