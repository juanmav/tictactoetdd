
const test = require('tape');
const TicTacToe = require('../TicTacToe');


    var tictactoe = new TicTacToe();

test("is over when all fields are taken", function(t) {
    var tictactoe = new TicTacToe();
    tictactoe.board =
        [
            1,2,1,
            1,2,1,
            2,1,1
        ];

    t.true(tictactoe.allPositionTaken());
    t.end();
});//*/

test("is over when all fields in a column are taken by a player", function(t) {
    var tictactoe = new TicTacToe();
    tictactoe.board =
        [
            0,0,1,
            0,0,1,
            0,0,1
        ];

    t.true(tictactoe.columnIsTakenByAPlayer());
    t.end();
});//*/

test("is over when all fields in a row are taken by a player", function(t) {
    var tictactoe = new TicTacToe();
    tictactoe.board =
        [
            1,1,1,
            0,0,0,
            0,0,0
        ];

    t.true(tictactoe.rowIsTakenByAPlayer());
    t.end();
});//*/

test("is over when all fields in a diagonal are taken by a player", function(t) {
    var tictactoe = new TicTacToe();
    tictactoe.board =
        [
            0,0,1,
            0,1,0,
            1,0,0
        ];

    t.true(tictactoe.diagonalIsTakenByAPlayer());
    t.end();
});//*/

test("player can take a field if not already taken", function(t) {
    var tictactoe = new TicTacToe();
    t.true(tictactoe.playerTakePosition(8));
    t.end();
});//*/


// Esta prueba me va hacer modificar el metodo desarrollado anteriormente "playerTakePosition"
test("players take turns taking fields until the game is over", function(t) {
    var tictactoe = new TicTacToe();
    t.true(tictactoe.playerTakePosition(8));
    t.true(tictactoe.playerTakePosition(1));
    t.true(tictactoe.playerTakePosition(2));
    t.true(tictactoe.playerTakePosition(6));
    t.true(tictactoe.playerTakePosition(7));
    t.true(tictactoe.playerTakePosition(4));
    t.true(tictactoe.playerTakePosition(5));
    t.false(tictactoe.playerTakePosition(0));
    t.end();
});//*/

// Test Auxiliar para verificar si alguien gano despues de una jugada.
test("Verify if someone won in a given board", function(t){
    var tictactoe = new TicTacToe();
    tictactoe.board =
        [
            2,2,1,
            1,1,2,
            1,2,2
        ];
    t.true(tictactoe.someoneWin());
    t.end();
});//*/

