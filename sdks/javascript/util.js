function getMove(player, board) {  
    // TODO: Determine valid moves
    return validMove(player, board);
  }
  
  function validMove(player, board) {
    //Find where Player's pieces are on the gameBoard
    let playersMoves = [];
    for (let row = 0; row < board.length; row++) {
      for (let col = 0; col < board[0].length; col++) {
        if (board[row][col] === player) playersMoves.push([row, col]);
      }
    }
    let possibleMoves = new Set()
    //change the Set to nested arrays
    possibleMoves = setToArray(potentialMoves(player, board, possibleMoves, playersMoves));
    //return a possible move from a random index
    return possibleMoves[randomMove(possibleMoves.length)];
  }
  
  function potentialMoves(player, board, possibleMoves, playersMoves) {
    //Find all possible valid moves for each of Player's disc
    for(let [r,c] of playersMoves) {
      //variables used to find both player's discs in every direction
      let northRow = r;
      let northCol = c;
      let southRow = r;
      let southCol = c;
      let westRow = r;
      let westCol = c;
      let eastRow = r;
      let eastCol = c;
      let northWestRow = r;
      let northWestCol = c;
      let northEastRow = r;
      let northEastCol = c;
      let southWestRow = r;
      let southWestCol = c;
      let southEastRow = r;
      let southEastCol = c;
      //Place to store all possible moves for every direction
      let possN = [];
      let possS = [];
      let possW = [];
      let possE = [];
      let possNW = [];
      let possNE = [];
      let possSW = [];
      let possSE = [];
      //North
      while(northRow >= 0) {
        if (board[northRow][northCol] === 0) { //the moment there is an empty space, it will stop push in so that it only records the filled spaces
          break;
        } else {
          possN.push([northRow, northCol]);
        }
        northRow--;
      }
      //South
      while(southRow < board.length) {
        if (board[southRow][southCol] === 0) {
          break;
        } else {
          possS.push([southRow, southCol]);
        }
        southRow++;
      }
      //West
      while(westCol >= 0) {
        if (board[westRow][westCol] === 0) {
          break;
        } else {
          possW.push([westRow, westCol]);
        } 
        westCol--;
      }
      //East
      while(eastCol < board[0].length) {
        if (board[eastRow][eastCol] === 0) {
          break;
        } else {
          possE.push([eastRow, eastCol]);
        }
        eastCol++;
      }
      //North-west
      while(northWestRow >= 0 && northWestCol >= 0) {
        if (board[northWestRow][northWestCol] === 0) {
          break;
        } else {
          possNW.push([northWestRow, northWestCol]);
        }
        northWestRow--;
        northWestCol--;
      }
      //North-east
      while(northEastRow >= 0 && northEastCol < board[0].length) {
        if (board[northEastRow][northEastCol] === 0) {
          break;
        } else {
          possNE.push([northEastRow, northEastCol]);
        }
        northEastRow--;
        northEastCol++;
      }
      //South-west
      while(southWestRow < board.length && southWestCol >= 0) {
        if (board[southWestRow][southWestCol] === 0) {
          break;
        } else {
          possSW.push([southWestRow, southWestCol]);
        }
        southWestRow++;
        southWestCol--;
      }
      //South-east
      while(southEastRow < board.length && southEastCol < board[0].length) {
        if (board[southEastRow][southEastCol] === 0) {
          break;
        } else {
          possSE.push([southEastRow, southEastCol]);
        }
        southEastRow++;
        southEastCol++;
      }
      let opponent;
      player === 1 ? opponent = 2 : opponent = 1;
      if(checkValidity(opponent, board, possN)) { //Check if the first move in possN is player's disc & last move is opponent's disc
        let newRow = possN[possN.length-1][0]-1;
        let newCol = possN[possN.length-1][1];
        if(validNewMove(board, newRow, newCol)) possibleMoves.add(`${possN[possN.length-1][0]-1}, ${possN[possN.length-1][1]}`); //Add the modified last move only if it's within the board & an empty space
      }
      if(checkValidity(opponent, board, possS)) {
        let newRow = possS[possS.length-1][0]+1;
        let newCol = possS[possS.length-1][1];
        if(validNewMove(board, newRow, newCol)) possibleMoves.add(`${possS[possS.length-1][0]+1}, ${possS[possS.length-1][1]}`);
      }
      if(checkValidity(opponent, board, possW)) {
        let newRow = possW[possW.length-1][0];
        let newCol = possW[possW.length-1][1]-1;
        if(validNewMove(board, newRow, newCol)) possibleMoves.add(`${possW[possW.length-1][0]}, ${possW[possW.length-1][1]-1}`);
      }
      if(checkValidity(opponent, board, possE)) {
        let newRow = possE[possE.length-1][0];
        let newCol = possE[possE.length-1][1]+1;
        if(validNewMove(board, newRow, newCol)) possibleMoves.add(`${possE[possE.length-1][0]}, ${possE[possE.length-1][1]+1}`);
      }
      if(checkValidity(opponent, board, possNW)) {
        let newRow = possNW[possNW.length-1][0]-1;
        let newCol = possNW[possNW.length-1][1]-1;
        if(validNewMove(board, newRow, newCol)) possibleMoves.add(`${possNW[possNW.length-1][0]-1}, ${possNW[possNW.length-1][1]-1}`);
      }
      if(checkValidity(opponent, board, possNE)) {
        let newRow = possNE[possNE.length-1][0]-1;
        let newCol = possNE[possNE.length-1][1]+1;
        if(validNewMove(board, newRow, newCol)) possibleMoves.add(`${possNE[possNE.length-1][0]-1}, ${possNE[possNE.length-1][1]+1}`);
      }
      if(checkValidity(opponent, board, possSW)) {
        let newRow = possSW[possSW.length-1][0]+1;
        let newCol = possSW[possSW.length-1][1]-1;
        if(validNewMove(board, newRow, newCol)) possibleMoves.add(`${possSW[possSW.length-1][0]+1}, ${possSW[possSW.length-1][1]-1}`);
      }
      if(checkValidity(opponent, board, possSE)) {
        let newRow = possSE[possSE.length-1][0]+1;
        let newCol = possSE[possSE.length-1][1]+1;
        if(validNewMove(board, newRow, newCol)) possibleMoves.add(`${possSE[possSE.length-1][0]+1}, ${possSE[possSE.length-1][1]+1}`);  
      }
    }
    return possibleMoves;
  }
  
  function checkValidity(opponent, board, moves) {
    let last = moves.length-1;
    let lastRow = moves[last][0];
    let lastCol = moves[last][1];
    return board[lastRow][lastCol] === opponent ? true : false;
  }
  
  function validNewMove(board, row, col) {
    let rowInbound = row >= 0 && row < board.length;
    let colInbound = col >= 0 && col < board[0].length;
    if (rowInbound && colInbound && board[row][col] === 0) return true;
    return false;
  }
  
  function setToArray(possibleMoves) {
    return Array.from(possibleMoves).map(move => move.split(',').map(pos => parseInt(pos)));   
  }
  
  function randomMove(length) {
    return Math.floor(Math.random() * length);
  }
  
  function prepareResponse(move) {
    const response = `${JSON.stringify(move)}\n`;
    console.log(`Sending response ${response}`);
    return response;
  }
  
  // TODO: Determine best move
  // // function bestMoves(possibleMoves) {
  // //   let bestMove;
  // //   let corners = new Set(['0, 0', '0, 7', '7, 0','7, 7'])
  
  // //   Array.from(possibleMoves.values()).map(move => {
  // //     if(corners.has(move)) bestMove = move;
  // //   })
  // //   return bestMove ? bestMove : false;
  // // }
  module.exports = {getMove, prepareResponse};