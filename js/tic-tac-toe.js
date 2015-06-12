/**
Implement an automated version of tic-tac-toe. Your program can assign random moves for X and O or you can implement some AI to favor one over the other. When the X side or the O side wins print out the board and who won. If the game is going to be a draw print out the board and print out that it will be a draw.

Based on these conditions your program should never print out a full board unless the final move is a game winning move. If a game is going to end in a draw just print out the board. The program should run until X or O has won 10 games, and then finally output the amount of time it took to run the simulation.
*/


var baseBoard;
var step;
var row;
var col;
var count;
var lastMove;
var finalWinner;
var playerOneCount = 0;
var playerTwoCount = 0;
var drawCount = 0;

var start = new Date().getTime();

while (playerOneCount < 10 && playerTwoCount < 10) {

    baseBoard = [[null, null, null],[null, null, null],[null, null, null]];
    count = 0;
    lastMove = [];
    finalWinner = undefined;

    for (var i = 0; i < 9; i++) {
        // make a random move
        lastMove = markBoard();

        // start looking for winner after 4th move
        if (i >= 4) {
            finalWinner = findWinner(baseBoard, lastMove);
        }

        // if find winner, then print out result and break loop
        if (finalWinner !== undefined) {
            if (finalWinner === 0) {
              playerOneCount++;
            } else {
              playerTwoCount++;
            }
            console.log('find winner:' + getPlayer(finalWinner));
            printBoard(baseBoard);
            console.log('------');
            break;
        }
        // if last game still no winner, then it's a draw
        if (i === 8) {
            drawCount++;
            console.log('draw');
            printBoard(baseBoard);
            console.log('------');
        }
    }
}

console.log("playerOneCount:" + playerOneCount);
console.log("playerTwoCount:" + playerTwoCount);
console.log("drawCount:" + drawCount);

var end = new Date().getTime();
console.log("time consumed:" + (end-start));




function printBoard (board) {
    for (var r = 0; r < 3; r++) {
        console.log(getPlayer(board[r][0]) + '|' + getPlayer(board[r][1]) + '|' + getPlayer(board[r][2]));
    }
}

function getPlayer (input) {
    var output;
    switch (input) {
    case 0:
        output = 'X';
        break;
    case 1:
        output = 'O';
        break;
    default:
        output = ' ';
    }
    return output;
}

function markBoard () {
    var step;
    var row;
    var col;

    while (true) {
        step = makeRandomMove();
        row = step[0];
        col = step[1];
        if (count >= 9) {
            break;
        }
        if (baseBoard[row][col] !== null) {
            continue;
        } else {
            baseBoard[row][col] = count % 2;
            count++;
            break;
        }
    }
    return [row, col];
}

function makeRandomMove () {
    var step = Math.floor(Math.random() * 9);
    return [Math.floor(step / 3), step % 3];
}


function findWinner (board, lastMove) {
    if (!lastMove) {
        return;
    }

    var row = lastMove[0];
    var col = lastMove[1];

    // test the related row and col
    if (board[row][0] === board[row][1] && board[row][0] === board[row][2]) {
        return board[row][0];
    } else if (board[0][col] === board[1][col] && board[0][col] === board[2][col]) {
        return board[0][col];
    }

    // test diagonal 1
    if (row === col && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
        return board[0][0];
    }

    // test diagonal 2
    if ((row === col && row === 1) || Math.abs(row - col) === 2) {
        if (board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
            return board[0][2];
        }
    }

    return;
}

function findWinner2 (board) {
    var dia1;
    var dia2;
    var midRow;
    var midCol;
    var leftRow;
    var topCol;
    var rightRow;
    var bottomRow;

  // 1. from middle
    if (board[1][1] !== null) {
        dia1 = board[1][1] === board[0][0] && board[1][1] === board[2][2];
        dia2 = board[1][1] === board[2][0] && board[1][1] === board[0][2];
        midRow = board[1][1] === board[1][0] && board[1][1] === board[1][2];
        midCol = board[1][1] === board[0][1] && board[1][1] === board[2][1];

        if (dia1 || dia2 || midRow || midCol) {
            return board[1][1];
        }
    }

  // 2. from top left
    if (board[0][0] !== null) {
        leftRow = board[0][0] === board[1][0] && board[0][0] === board[2][0];
        topCol = board[0][0] === board[0][1] && board[0][0] === board[0][2];

        if (leftRow || topCol) {
            return board[0][0];
        }
    }

    // 3. from bottom right
    if (board[2][2] !== null) {
        rightRow = board[2][2] === board[0][2] && board[2][2] === board[1][2];
        bottomRow = board[2][2] === board[2][0] && board[2][2] === board[2][1];

        if (rightRow || bottomRow) {
            return board[2][2];
        }
    }

    return;
}





