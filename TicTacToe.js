function TicTacToe(){
    this.board = [
            0,0,0,
            0,0,0,
            0,0,0
        ];
    this.nextTurn = TicTacToe.playerOne;
}

TicTacToe.freePosition = 0;
TicTacToe.playerOne = 1;
TicTacToe.playerTwo = 2;

TicTacToe.prototype.allPositionTaken = function(){
    for( var i = 0; i <= this.board.length -1; i++){
        if (this.board[i] === 0) {
            console.log(this.board[i]);
            return false;
        }
    }
    return true;
};

TicTacToe.prototype.columnIsTakenByAPlayer= function(){
    for( var i = 0; i <=3; i++){
        if ((this.board[i] !== 0) && ( this.board[i] === this.board[i + 3]) &&  (this.board[i] === this.board[i + 6])){
            return true;
        }
    }
    return false;
};

TicTacToe.prototype.rowIsTakenByAPlayer = function(){
    for( var i = 0; i <=3; i++){
        if ((this.board[i] !== 0) && ( this.board[i] === this.board[i + 1]) &&  (this.board[i] === this.board[i + 2])){
            return true;
        }
    }
    return false;
};

TicTacToe.prototype.diagonalIsTakenByAPlayer = function(){
    if( (this.board[0] !== 0) && (this.board[0] === this.board[4]) && (this.board[0] === this.board[8])){
        return true;
    } else if ( (this.board[2] !== 0) && (this.board[2] === this.board[4]) && (this.board[2] === this.board[6])) {
        return true;
    }
    return false;
};

TicTacToe.prototype.playerTakePosition = function (position){
    var could = false;
    if (!this.isFinished()){
        if (this.board[position] === 0){
            console.log('Posicion Tomada');
            this.board[position] = this.nextTurn;
            this.nextTurn = this.nextTurn === 1 ? 2 : 1;
            this.printBoard();
            could =  true;
        } else {
            console.log('Posicion Ocupada Intente de nuevo');
            this.printBoard();
        }
    } else {
        console.log('El juego ya finalizo!');
        this.printBoard();
    }
    if (this.isFinished()){
        console.log('El juego ya finalizo:');
        if (this.someoneWin()){
            console.log('El ganador es el jugador numero: ');
            console.log(this.nextTurn === 1 ? 2 : 1);
        } else {
            console.log('en empate!');
        }
    }
    return could;
};

// Este metodo no se genero directament e por el TDD
TicTacToe.prototype.someoneWin = function(){
    return this.columnIsTakenByAPlayer() || this.rowIsTakenByAPlayer() || this.diagonalIsTakenByAPlayer();
};

// Este metodo no se genero directament e por el TDD
TicTacToe.prototype.isFinished = function (){
    return this.someoneWin() || this.allPositionTaken();
};

// Este metodo no se genero directament e por el TDD
TicTacToe.prototype.printBoard = function(){
    console.log('> Tablero <');
    for (var i = 0; i <= 8; i = i + 3){
        console.log('   ' + this.board[i] + ' ' +  this.board[i + 1] + ' ' + this.board[i + 2]);
    }
};

module.exports = TicTacToe;