/* eslint-disable prefer-destructuring */
const gameBoard = (() => {
  const arrayTiles = ['', '', '', '', '', '', '', '', ''];

  const setBoardTile = (index, value) => {
    if (arrayTiles[index] == '') {
      arrayTiles[index] = value;
    }
  };

  const checkRows = (board = arrayTiles) => {
    let rows = false;
    if ((board[0] !== '')
      && (board[0] === board[1] && board[0] === board[2])) {
      rows = board[0];
    } else if ((board[3] !== '')
      && (board[3] === board[4] && board[3] === board[5])) {
      rows = board[3];
    } else if ((board[6] !== '')
      && (board[6] === board[7] && board[6] === board[8])) {
      rows = board[6];
    }
    return rows;
  };

  const checkColumns = (board = arrayTiles) => {
    let columns = false;
    if ((board[0] !== '') &&
      (board[0] === board[3] && board[0] === board[6])) {
      columns = board[0];
    } else if ((board[1] !== '') &&
      (board[1] === board[4] && board[1] === board[7])) {
      columns = board[1];
    } else if ((board[2] !== '') &&
      (board[2] === board[5] && board[2] === board[8])) {
      columns = board[2];
    }
    return columns;
  };

  const checkDiagonals = (board = arrayTiles) => {
    let diagonal = false;
    if ((board[0] !== '') &&
      (board[0] === board[4] && board[0] === board[8])) {
      diagonal = board[0];
    } else if ((board[2] !== '') &&
      (board[2] === board[4] && board[2] === board[6])) {
      diagonal = board[2];
    }
    return diagonal;
  };

  const resetBoard = () => (arrayTiles['', '', '', '', '', '', '', '', '']);

  return {
    arrayTiles,
    setBoardTile,
    checkRows,
    resetBoard,
    checkColumns,
    checkDiagonals,
  };
})();

const player = (name, token) => {
  const score = 0;
  return { name, token, score };
};

const gameManager = (player1, player2) => {
  let currentPlayer = player1;

  const roundSelector = () => {
    currentPlayer = currentPlayer === player1 ? player2 : player1;
    return currentPlayer;
  };

  const winner = winToken => {
    if (winToken) {
      if (winToken == player1.token) {
        return player1;
      } if (winToken == player2.token) {
        return player2;
      }
    }
  };

  const getCurrentPlayer = () => currentPlayer;

  return { getCurrentPlayer, winner, roundSelector };
};

module.exports = { gameBoard, player, gameManager };
