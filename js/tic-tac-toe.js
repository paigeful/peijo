/**
Implement an automated version of tic-tac-toe. Your program can assign random moves for X and O or you can implement some AI to favor one over the other. When the X side or the O side wins print out the board and who won. If the game is going to be a draw print out the board and print out that it will be a draw.

Based on these conditions your program should never print out a full board unless the final move is a game winning move. If a game is going to end in a draw just print out the board. The program should run until X or O has won 10 games, and then finally output the amount of time it took to run the simulation.
*/

var baseBoard = [[null, null, null],[null, null, null],[null, null, null]];
var step;
var row;
var col;
var count = 0;
var finalWinner;

for (var i = 0; i < 9; i++) {
    markBoard();

    if (i >= 4) {
        finalWinner = findWinner(baseBoard);
    }
    if (finalWinner) {
        console.log('find winner:' + getPlayer(finalWinner));
        printBoard(baseBoard);
        break;
    }

    if (i === 8) {
        console.log('draw');
        printBoard(baseBoard);
    }
}

function printBoard (board) {
  for (var r = 0; r < 3; r++) {
    console.log(getPlayer(board[r][0]) + '|' + getPlayer(board[r][1]) + '|' + getPlayer(board[r][2]));
  }
}

function getPlayer (input) {
  switch (input) {
    case 0:
      return 'X';
    case 1:
      return 'O';
    default:
      return ' ';
  }
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
}

function makeRandomMove () {
    var step = Math.floor(Math.random() * 9);
    return [Math.floor(step / 3), step % 3];
}


function findWinner (board) {
    var winner;
    var j;
    var tmp;

    // row
    for (var n = 0; n < 3; n++) {
        if (winner) {
            break;
        }

        j = 0;

        while (true) {
            if (board[n][j] === null) {
                break;
            }
            if (j === 0) {
                tmp = board[n][j];
            }
            if (j >= 1) {
                if (tmp !== board[n][j]) {
                    break;
                }
                if (j === 2) {
                    winner = board[n][j];
                    return winner;
                }
            }
            j++;
        }
    }

    // col
    for (var m = 0; m < 3; m++) {
        if (winner) {
            break;
        }

        j = 0;

        while (true) {
            if (board[j][m] === null) {
                break;
            }
            if (j === 0) {
                tmp = board[j][m];
            }
            if (j >= 1) {
                if (tmp !== board[j][m]) {
                    break;
                }
                if (j === 2) {
                    winner = board[j][m];
                    return winner;
                }
            }
            j++;
        }
    }

    // diagonal 1
    j = 0;
    while (true) {
        if (board[j][j] === null) {
            break;
        }
        if (j === 0) {
            tmp = board[j][j];
        }
        if (j >= 1) {
            if (tmp !== board[j][j]) {
                break;
            }
            if (j === 2) {
                winner = board[j][j];
                return winner;
            }
        }

        j++;
    }

    // diagonal 2
    j = 0;
    while (true) {
        if (board[j][2-j] === null) {
            break;
        }
        if (j === 0) {
            tmp = board[j][2-j];
        }
        if (j >= 1) {
            if (tmp !== board[j][2-j]) {
                break;
            }
            if (j === 2) {
                winner = board[j][2-j];
                return winner;
            }
        }

        j++;
    }

}



