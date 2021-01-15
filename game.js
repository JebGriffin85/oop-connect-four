import { Column } from './column.js';

export class Game {
    constructor(playerOne, playerTwo) {
        this.playerOne = playerOne;
        this.playerTwo = playerTwo;
        this.currentPlayer = 1;
        this.columns = [ new Column(), new Column(), new Column(), new Column(), new Column(), new Column(), new Column() ];

    }
    getName(){
        return `${this.playerOne} vs. ${this.playerTwo}`;
    }
    playInColumn(columnIndex){
        this.columns[columnIndex].add(this.currentPlayer)

        if(this.currentPlayer === 1) {
            this.currentPlayer = 2;
        } else {
            this.currentPlayer = 1;
        }
    }

    getCombinedTokenAt(rowIndex, columnIndex) {
        return this.columns[columnIndex].getTokenAt(rowIndex)
    }
}
