describe("Game", function() {

    var TicTacToe = require('../TicTacToe');
    var tictactoe;

    beforeEach(function() {
        tictactoe = new TicTacToe();
    });

    it("is over when all fields are taken", function() {
        tictactoe.board =
            [
                1,2,1,
                1,2,1,
                2,1,1
            ];

        expect(tictactoe.allPositionTaken()).toBe(true);
    });//*/

    it("is over when all fields in a column are taken by a player", function() {
        tictactoe.board =
            [
                0,0,1,
                0,0,1,
                0,0,1
            ];

        expect(tictactoe.columnIsTakenByAPlayer()).toBe(true);
    });//*/

    it("is over when all fields in a row are taken by a player", function() {
        tictactoe.board =
            [
                1,1,1,
                0,0,0,
                0,0,0
            ];

        expect(tictactoe.rowIsTakenByAPlayer()).toBe(true);
    });//*/

    it("is over when all fields in a diagonal are taken by a player", function() {
        tictactoe.board =
            [
                0,0,1,
                0,1,0,
                1,0,0
            ];

        expect(tictactoe.diagonalIsTakenByAPlayer()).toBe(true);
    });//*/

    it("player can take a field if not already taken", function() {
        expect(tictactoe.playerTakePosition(8)).toBe(true);
    });//*/


    // Esta prueba me va hacer modificar el metodo desarrollado anteriormente "playerTakePosition"
    it("players take turns taking fields until the game is over", function() {
        expect(tictactoe.playerTakePosition(8)).toBe(true);
        expect(tictactoe.playerTakePosition(1)).toBe(true);
        expect(tictactoe.playerTakePosition(2)).toBe(true);
        expect(tictactoe.playerTakePosition(6)).toBe(true);
        expect(tictactoe.playerTakePosition(7)).toBe(true);
        expect(tictactoe.playerTakePosition(4)).toBe(true);
        expect(tictactoe.playerTakePosition(5)).toBe(true);
        expect(tictactoe.playerTakePosition(0)).toBe(false);

    });//*/

    // Test Auxiliar para verificar si alguien gano despues de una jugada.
    it("Verify if someone won in a given board", function(){
        tictactoe.board =
            [
                2,2,1,
                1,1,2,
                1,2,2
            ];
        expect(tictactoe.someoneWin()).toBe(true);
    });//*/

});