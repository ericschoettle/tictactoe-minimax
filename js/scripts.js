$(document).ready(function() {

// Initialize board
var board = [[0,0,0], [0,0,0], [0,0,0]]

// winning conditions
function checkWin(board) {

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

  if((board[1][1]===board[2][2]) && (board[0][0]===board[2][2])){
    if (board[1][1]=== "X") {
      return true
    } else if ((board[1][1]=== "O")) {
      return false
    } else {
      alert("this isn't supposed to happen")
    }
  }

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

// console.log(checkWin([[0,1,"X"], [3,"X",5], ["X",7,8]]))
var scores = [[0,0,0], [0,0,0], [0,0,0]];

function minimax(board) {
  var moves = [];
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (board[i][j]===0) {
        moves.push([i,j])
      }
    }
  }

  for (var i = 0; i < moves.length; i++) {
    var localBoard = board.slice();
    localBoard[moves[i][0]][moves[i][1]] = 'X';
    if(checkWin(localBoard)){
      scores[moves[i][0]][moves[i][1]]+=1;
    }
    else if(checkWin(localBoard) === false){
      scores[moves[i][0]][moves[i][1]]-=1;
    }
    else{
      minimax(localBoard);
    }
  }
}

console.log(minimax([[0,0,0], [0,"X",0], [0,0,"X"]]),scores);


});
