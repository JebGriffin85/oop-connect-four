import { Column } from './column.js';

export class Game {
    constructor(playerOne, playerTwo) {
        this.playerOne = playerOne;
        this.playerTwo = playerTwo;
        this.currentPlayer = 1;
        this.column = [ new Column(), new Column(), new Column(), new Column(), new Column(), new Column(), new Column() ];

    }
    getName(){
        return `${this.playerOne} vs. ${this.playerTwo}`;
    }
    playInColumn(columnIndex){
        let choosenCol = this.column[columnIndex];
        // Column.add(choosenCol());
        this.column[columnIndex].add(this.currentPlayer)

        if(this.currentPlayer === 1) {
            this.currentPlayer = 2;
        } else {
            this.currentPlayer = 1;
        }
    }
}
