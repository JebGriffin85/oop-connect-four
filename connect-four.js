import { Game } from './game.js';

let game = undefined;
const clickTargets = document.getElementById("click-targets");
const boardHolder = document.getElementById("board-holder");
const gameName = document.getElementById("game-name");

function updateUI() {
    if (game === undefined) {
        boardHolder.classList.add("is-invisible");
    } else {
        console.log(game)
        boardHolder.classList.remove("is-invisible");
        gameName.innerHTML = game.getName();
        if (game.currentPlayer === 1) {
          clickTargets.classList.add("black");
          clickTargets.classList.remove("red");
        } else {
            clickTargets.classList.add("red");
            clickTargets.classList.remove("black");
        }
    }


}

window.addEventListener("DOMContentLoaded", () => {

    const playerOneName = document.getElementById("player-1-name");
    const playerTwoName = document.getElementById("player-2-name");
    const newGameButton = document.getElementById("new-game");

    // let playerOneNameValue = playerOneName.value;  // y this one doesn't work?
    // let playerTwoNameValue = playerTwoName.value;

    function enableButton() {
        if (playerOneName.value && playerTwoName.value) {
            newGameButton.disabled = false;
        } else {
            newGameButton.disabled = true;
        }
    }

    playerOneName.addEventListener("keyup", event => {
        enableButton();
    })

    playerTwoName.addEventListener("keyup", event => {
        enableButton();
    })

    newGameButton.addEventListener("click", event => {
        game = new Game(playerOneName.value, playerTwoName.value);
        playerOneName.value = '';
        playerTwoName.value = '';
        enableButton();
        updateUI();

    clickTargets.addEventListener("click", event => {
        game.playInColumn();
        updateUI();
    })






    })










})
