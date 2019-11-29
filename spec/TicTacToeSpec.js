
const test = require('tape');
const TicTacToe = require('../TicTacToe');

test("is over when all fields are taken", function(t) {
    let ticTacToe = new TicTacToe();
    ticTacToe.board =
        [
            1,2,1,
            1,2,1,
            2,1,1
        ];

    t.true(ticTacToe.allPositionTaken());
    t.end();
});//*/

test("is over when all fields in a column are taken by a player", function(t) {
    let ticTacToe = new TicTacToe();
    ticTacToe.board =
        [
            0,0,1,
            0,0,1,
            0,0,1
        ];

    t.true(ticTacToe.columnIsTakenByAPlayer());
    t.end();
});//*/

test("is over when all fields in a row are taken by a player", function(t) {
    let ticTacToe = new TicTacToe();
    ticTacToe.board =
        [
            1,1,1,
            0,0,0,
            0,0,0
        ];

    t.true(ticTacToe.rowIsTakenByAPlayer());
    t.end();
});//*/

test("is over when all fields in a diagonal are taken by a player", function(t) {
    let ticTacToe = new TicTacToe();
    ticTacToe.board =
        [
            0,0,1,
            0,1,0,
            1,0,0
        ];

    t.true(ticTacToe.diagonalIsTakenByAPlayer());
    t.end();
});//*/

test("player can take a field if not already taken", function(t) {
    let ticTacToe = new TicTacToe();
    t.true(ticTacToe.playerTakePosition(8));
    t.end();
});//*/


// Esta prueba me va hacer modificar el metodo desarrollado anteriormente "playerTakePosition"
test("players take turns taking fields until the game is over", function(t) {
    let ticTacToe = new TicTacToe();
    t.true(ticTacToe.playerTakePosition(8));
    t.true(ticTacToe.playerTakePosition(1));
    t.true(ticTacToe.playerTakePosition(2));
    t.true(ticTacToe.playerTakePosition(6));
    t.true(ticTacToe.playerTakePosition(7));
    t.true(ticTacToe.playerTakePosition(4));
    t.true(ticTacToe.playerTakePosition(5));
    t.false(ticTacToe.playerTakePosition(0));
    t.end();
});//*/

// Test Auxiliar para verificar si alguien gano despues de una jugada.
test("Verify if someone won in a given board", function(t){
    let tictactoe = new TicTacToe();
    tictactoe.board =
        [
            2,2,1,
            1,1,2,
            1,2,2
        ];
    t.true(tictactoe.someoneWin());
    t.end();
});//*/

