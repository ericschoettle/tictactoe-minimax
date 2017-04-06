var active = "player";
// Initialize board
var board = [[0,0,0],
             [0,0,0],
             [0,0,0]]
// function playerMove(board, ) {
//   showBoard(board)
// }
function linearIndexToSquareIndex(linearIndex) {
  var colIndex = linearIndex % 3;
  var rowIndex = Math.floor(linearIndex/3);
  return [rowIndex, colIndex]
}


// winning conditions
function checkWin(board) {
 // rows win
  for (var i = 0; i < 3; i++) {
    if((board[i][0]===board[i][1]) && (board[i][0]===board[i][2])){
      if (board[i][0]=== "X") {
        return true
      } else if ((board[i][0]=== "O")) {
        return false
      } else {
        alert("this isn't supposed to happen")
      }
    }
  }
  // columns win
  for (var i = 0; i < 3; i++) {
    if((board[0][i]===board[1][i]) && (board[2][i]===board[0][i])){
      if (board[0][i]=== "X") {
        return true
      } else if ((board[0][i]=== "O")) {
        return false
      } else {
        alert("this isn't supposed to happen")
      }
    }
  }
  // diaganal win 1
  if((board[1][1]===board[2][2]) && (board[0][0]===board[2][2])){
    if (board[1][1]=== "X") {
      return true
    } else if ((board[1][1]=== "O")) {
      return false
    } else {
      alert("this isn't supposed to happen")
    }
  }
  // diagonal win 2
  if((board[1][1]===board[0][2]) && (board[1][1]===board[2][0])){
    if (board[1][1]=== "X") {
      return true
    } else if ((board[1][1]=== "O")) {
      return false
    } else {
      alert("this isn't supposed to happen")
    }
  }
}

// function getAvailableMoves(board) {
//   var moves = []; // create moves array
//   for (var i = 0; i < 3; i++) {
//     for (var j = 0; j < 3; j++) {
//       if (board[i][j] === 0) {
//         moves.push([i,j])
//       }
//     }
//   }
//   return moves
// }
//
// function populateScoresArray(moves, board, playerSymbol) {
//   for (var k = 0; k < moves.length; k++) {
//     board = getNewState(moves[k],board, playerSymbol)
//     if(checkWin(board)){
//       scores[moves[k][0]][moves[k][1]] += 1;
//     }
//     else if(checkWin(board) === false){
//       scores[moves[k][0]][moves[k][1]] -= 1;
//     }
//     else{
//       minimax(board); //is this right?
//     }
//   } //it says to push the move into the moves array, but it should already be there. Similarly, the scores is a bit messy, because the scores array isn't keeping track of the scores at each move.
// }
//
// function getNewState (move, board, playerSymbol) {
//   board = board.slice();
//   board[move[0]][move[1]] = playerSymbol;
// }
//
function maxCalculation (scores, moves) {
  movesWithScores = []
  for (var i = 0; i < moves.length; i++) {
    if (scores[moves[i][0]][moves[i][1]]) {
      movesWithScores.push([moves[i][0], moves[i][1], scores[moves[i][0]][moves[i][1]]])
    }
  }
  var maxVal = Math.max.apply(Math, movesWithScores[2])
  var maxIndex = movesWithScores[2].indexOf(maxVal)

}
//
//
//
//
//
// function minimax(board) {
//   var scores = [[0,0,0],
//                 [0,0,0],
//                 [0,0,0]];
//
//   var moves = getAvailableMoves(board)
//   populateScoresArray(moves, board, playerSymbol)
//
//   if (playerSymbol === "X") {
//     scores = maxCalculation(scores, moves)
//   }
//
//
//
//
// }

// console.log(minimax([[0,"O","O"],
//                      ["O","O","X"],
//                      ["X","X",0]]));

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault()

    var move = $("#input").val();
    var indexPair = linearIndexToSquareIndex(move);
    board[indexPair[0]][indexPair[1]] = "O";
    active = "computer";
    console.log(board)
  })
});
