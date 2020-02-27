const gameBoard = (() => {
  const board = ['', '', '', '', '', '', '', '', ''];

  const setBoardTile = (index, value) => {
    if (board[index] == '') {
      board[index] = value;
    }
  };

  return {
    board,
    setBoardTile,
  };
})();

module.exports = { gameBoard };
