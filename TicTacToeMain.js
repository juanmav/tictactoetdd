/**
 * Created by juanma on 28/05/15.
 */
var readline = require('readline');
var TicTacToe = require('./TicTacToe');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

var tictactoe = new TicTacToe();

console.log('Inicializando TicTacToe');
console.log('Las posiciones del tablero son las siguienes');
console.log('> Tablero <');
console.log('   0 1 2');
console.log('   3 4 5');
console.log('   6 7 8');
console.log('comienza el jugador 1:');

rl.on('line', function(line){
    if (line >= 0 && line <= 8){
        tictactoe.playerTakePosition(line);
    }
});
