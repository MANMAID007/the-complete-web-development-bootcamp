/** @format */

const diceEl_1 = document.querySelector(".dice1");
const diceEl_2 = document.querySelector(".dice2");
const winnerEl = document.querySelector(".winner");
const playButton = document.querySelector("#playButton");

playButton.addEventListener("click", function () {
    const random_1 = Math.trunc(Math.random() * 6) + 1;
    const random_2 = Math.trunc(Math.random() * 6) + 1;
    diceEl_1.src = `images/dice-${random_1}.png`;
    diceEl_2.src = `images/dice-${random_2}.png`;
    if (random_1 > random_2) {
        winnerEl.textContent = `Player 1 wins`;
    } else if (random_2 > random_1) {
        winnerEl.textContent = `Player 2 wins`;
    } else {
        winnerEl.textContent = `It's a draw`;
    }
});
