const { gameBoard, player, gameManager } = require('./tic-tac-toe');

describe('game board', () => {
  it('setBoardTile function set tile position on game board', () => {
    expect(gameBoard.setBoardTile(0, 'X')).toBe(gameBoard.arrayTiles['X', '', '', '', '', '', '', '', '']);
  });

  it('reset game board', () => {
    expect(gameBoard.resetBoard()).toBe(gameBoard.arrayTiles['', '', '', '', '', '', '', '', '']);
  });
});

describe('game winning patterns', () => {
  it('check first row for win pattern on the game board', () => {
    const rowOne = ['X', 'X', 'X', '', '', '', '', '', ''];
    expect(gameBoard.checkRows(rowOne)).toBe('X');
  });

  it('check second row for win pattern on the game board', () => {
    const rowTwo = ['', '', '', 'O', 'O', 'O', '', '', ''];
    expect(gameBoard.checkRows(rowTwo)).toBe('O');
  });

  it('check third row for win pattern on the game board', () => {
    const rowThree = ['', '', '', '', '', '', 'X', 'X', 'X'];
    expect(gameBoard.checkRows(rowThree)).toBe('X');
  });
});

describe('Players', () => {
  it('playerA', () => {
    const playerX = player('playerA', 'X');
    expect(playerX.name).toBe('playerA');
    expect(playerX.token).toBe('X');
    expect(playerX.score).toBe(0);
  });

  it('playerB', () => {
    const playerO = player('playerB', 'O');
    expect(playerO.name).toBe('playerB');
    expect(playerO.token).toBe('O');
    expect(playerO.score).toBe(0);
  });
});

describe('GameManager', () => {
  const playerA = player('playerA', 'X');
  const playerB = player('playerB', 'O');
  const gm = gameManager(playerA, playerB);

  it('select current player', () => {
    expect(gm.getCurrentPlayer()).toBe(playerA);
  });

  it('round selector', () => {
    expect(gm.roundSelector()).toBe(playerB);
  });

  it('game winner', () => {
    expect(gm.winner('X')).toBe(playerA);
    expect(gm.winner('O')).toBe(playerB);
  });
});
