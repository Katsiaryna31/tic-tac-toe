class TicTacToe {
    currentPlayer = "x";
    gameField = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]
    constructor() {
        
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.gameField[rowIndex][columnIndex]!= null) {
            return;
        }
        this.gameField[rowIndex][columnIndex] = this.currentPlayer;
        if (this.currentPlayer === 'x') {
            this.currentPlayer = 'o';
        } else {
            this.currentPlayer = 'x';
        }
    }

    isFinished() {
        if (this.getWinner()!== null || this.isDraw()) {
            return true;
        } else {
            return false;
        }
    }

    getWinner() {
        let winner='';
        if (this.gameField[0][0] === this.gameField[0][1] && this.gameField[0][1]===this.gameField[0][2]) {
            winner = this.gameField[0][0];
        } else if (this.gameField[1][0] === this.gameField[1][1] && this.gameField[1][1]===this.gameField[1][2]) {
            winner =  this.gameField[1][0];
        } else if (this.gameField[2][0] === this.gameField[2][1] && this.gameField[2][1]===this.gameField[2][2]) {
            winner =  this.gameField[2][0];
        } else if (this.gameField[0][0] === this.gameField[1][0] && this.gameField[1][0]===this.gameField[2][0]) {
            winner =  this.gameField[0][0];
        } else if (this.gameField[0][1] === this.gameField[1][1] && this.gameField[1][1]===this.gameField[2][1]) {
            winner =  this.gameField[0][1];
        } else if (this.gameField[0][2] === this.gameField[1][2] && this.gameField[1][2]===this.gameField[2][2]) {
            winner =  this.gameField[0][2];
        } else if (this.gameField[0][0] === this.gameField[1][1] && this.gameField[1][1]===this.gameField[2][2]) {
            winner =  this.gameField[0][0];
        } else if (this.gameField[0][2] === this.gameField[1][1] && this.gameField[1][1]===this.gameField[2][0]) {
            winner =  this.gameField[0][2];
        } else {
            winner =  null;
        }
        return winner;
    }

    noMoreTurns() {
        let array = [];
        this.gameField.forEach(row => {
            row.forEach (point => {
                if (point === null) {
                    array.push (point);
                }
            })
        });
        if (array.length > 0) {
            return false;
        }
        return true;
    }

    isDraw() {
        if (this.noMoreTurns() && this.getWinner() === null) {
            return true;
        } 
            return false;
    }

    getFieldValue(rowIndex, colIndex) {
        if (rowIndex <=2 && colIndex<= 2) {
            return this.gameField[rowIndex][colIndex];
        } else {
            return null;
        }
        
    }
}

module.exports = TicTacToe;
