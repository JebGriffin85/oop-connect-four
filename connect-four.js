import { Game } from './game.js';
let game = undefined;

window.addEventListener("DOMContentLoaded", () => {

const playerOneName = document.getElementById("player-1-name");
const playerTwoName = document.getElementById("player-2-name");
const newGameButton = document.getElementById("new-game");

// let playerOneNameValue = playerOneName.value;  // y this one doesn't work?
// let playerTwoNameValue = playerTwoName.value;
playerOneName.addEventListener("keyup", event => {
if (playerOneName.value && playerTwoName.value){
    newGameButton.disabled = false;
}else {
    newGameButton.disabled = true;
}
})
playerTwoName.addEventListener("keyup", event => {
    if (playerOneName.value && playerTwoName.value){
        newGameButton.disabled = false;
    }else {
        newGameButton.disabled = true;
    }
   })










})
