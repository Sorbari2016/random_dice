// JAVASCRIPT CODE FOR THE GAME 

function randomDiceImage() {
    const number = 6;
    const randomIndex = Math.floor(Math.random() * number);
    const diceImages = ["./images/dice1.png", "./images/dice2.png", "./images/dice3.png",
                        "./images/dice4.png", "./images/dice5.png", "./images/dice6.png"];
    return diceImages[randomIndex];
}

document.querySelector(".img1").setAttribute("src", randomDiceImage());
document.querySelector(".img2").setAttribute("src", randomDiceImage());
