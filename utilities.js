function getDiceRollArray(diceCount) {  
    return new Array(diceCount).fill(0).map(x => Math.floor(Math.random() * 6) + 1);
}

function getDicePlaceholderHtml(diceCount){
    return new Array(diceCount).fill(0).map(x => `<div class="placeholder-dice"></div>`).join('');
}

export {getDiceRollArray, getDicePlaceholderHtml}