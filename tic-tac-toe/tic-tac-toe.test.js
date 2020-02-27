const { gameBoard } = require('./tic-tac-toe');

it('setBoardTile function set tile position on game board', () => {
  expect(gameBoard.setBoardTile(0, 'X')).toBe(gameBoard.board['X', '', '', '', '', '', '', '', '']);
});

it('reset game board', () => {
  expect(gameBoard.resetBoard()).toBe(gameBoard.board['', '', '', '', '', '', '', '', '']);
});

describe('Players', () => {
  it('playerA', () => {
    const playerX = player('playerA', 'X');
    expect(playerX.name).toBe('playerA');
    expect(player.score).toBe(0);
  });

  it('playerB', () => {
    const playerO = player('playerB', 'O');
    expect(playerO.name).toBe('playerB');
    expect(player.score).toBe(0);
  });
});
