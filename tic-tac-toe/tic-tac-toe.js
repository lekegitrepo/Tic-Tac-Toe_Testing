const gameBoard = (() => {
  const board = ['', '', '', '', '', '', '', '', ''];

  const setBoardTile = (index, value) => {
    if (board[index] == '') {
      board[index] = value;
    }
  };

  const checkRows = () => {
    if (board[0] === board[1] && board[0] === board[2]) {
      return board[0];
    } if (board[3] === board[4] && board[3] === board[5]) {
      return board[3];
    } if (board[6] === board[7] && board[6] === board[8]) {
      return board[6];
    }
  };

  const resetBoard = () => (board['', '', '', '', '', '', '', '', '']);

  return {
    board,
    setBoardTile,
    checkRows,
    resetBoard,
  };
})();

module.exports = { gameBoard };
