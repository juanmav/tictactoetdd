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
   return this.lineIsTakenByAPlayer(3);
};

TicTacToe.prototype.rowIsTakenByAPlayer = function(){
    return this.lineIsTakenByAPlayer(1);
};

/**
 * Este metodo viene por la verificacion de duplicado de codeclimate.com
 *
 * rowOrColumn es un entero que dice si es columna o fila.
 *
 * 1 para row
 * 3 para column
 *
 * */

TicTacToe.prototype.lineIsTakenByAPlayer = function (rowOrColumn) {
    for( var i = 0; i <=3; i++){
        if ((this.board[i] !== 0) && ( this.board[i] === this.board[i + rowOrColumn ]) &&  (this.board[i] === this.board[i + rowOrColumn *2 ])){
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
            could =  true;
        } else {
            console.log('Posicion Ocupada Intente de nuevo');
        }
    } else {
        console.log('El juego ya finalizo!');
        this.printResult();
    }
    this.printBoard();
    return could;
};

TicTacToe.prototype.printResult = function () {
    if (this.someoneWin()){
        console.log('El ganador es el jugador numero: ');
        console.log(this.nextTurn === 1 ? 2 : 1);
    } else {
        console.log('en empate!');
    }
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