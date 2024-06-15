function rollDice(){
    const numberOfDice = document.getElementById("number_of_dice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImage = document.getElementById("diceImage");
    const values = [];
    const images = [];

    for (let i = 0; i < numberOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="dice_roller/${value}.png" alt= "Dice ${value}">`);
    }
    diceResult.textContent = `Dice: ${values.join(', ')}`;
    diceImage.innerHTML = images.join(' ');
}

