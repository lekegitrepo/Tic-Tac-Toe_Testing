const { gameBoard } = require('./tic-tac-toe');

it('game board', () => {
  expect(gameBoard.setBoardTile(0, 'X')).toBe(gameBoard.board['X', '', '', '', '', '', '', '', '']);
});
