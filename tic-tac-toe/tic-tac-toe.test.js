const { gameBoard } = require('./tic-tac-toe');

it('setBoardTile function set tile position on game board', () => {
  expect(gameBoard.setBoardTile(0, 'X')).toBe(gameBoard.board['X', '', '', '', '', '', '', '', '']);
});

it('reset game board', () => {
  expect(gameBoard.resetBoard()).toBe(gameBoard.board['', '', '', '', '', '', '', '', '']);
});
