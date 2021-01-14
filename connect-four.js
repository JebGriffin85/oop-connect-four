import { Game } from './game.js';
let game = undefined;

window.addEventListener("DOMContentLoaded", () => {

const playerOneName = document.getElementById("player-1-name");
const playerTwoName = document.getElementById("player-2-name");
const newGameButton = document.getElementById("new-game");
playerOneName.addEventListener("keyup", event => {
  let playerOne = false;
    // newGameButton.disabled = false;


})

playerTwoName.addEventListener("keyup", event => {
//   newGameButton.disabled = false;
   let
   })

if (playerOneName.value !== 0 && playerTwoName.value !== 0) {
    newGameButton.disabled = false;
} else {
    newGameButton.disabled = true;
}









})
