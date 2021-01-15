// export class Column{
//     constructor(){
//         this.tokens = [null, null, null, null, null, null];
//     }

//     add(playerNumber){
//         for (let i = 5; i >= 0; i--){
//             if (this.tokens[i] === null){
//                 this.tokens[i] = playerNumber;
//                 break;
//             }
//         }
//     }
//     getTokenAt(rowIndex){
//         return this.tokens[rowIndex]
//     }

// }
export class Column {
    constructor() {
      this.tokens = [];
    }
    add(playerNumber) {
      if (!this.isFull()) {
        this.tokens.push(playerNumber);
      }
    }
    getTokenAt(rowIndex) {
      return this.tokens[5 - rowIndex];
    }
    isFull() {
      return this.tokens.length === 6;
    }
  }
