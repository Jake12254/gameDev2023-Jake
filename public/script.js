const board = document.querySelector('.game-board');
const cells = document.querySelectorAll('.grid-cell');
const resetButton = document.querySelector('.reset-button');
const playerTurn = document.querySelector('.player-turn');

const ROWS = 6;
const COLS = 7;
const EMPTY = 0;
const PLAYER_1 = 1;
const PLAYER_2 = 2;

let currentPlayer = PLAYER_1;
let gameOver = false;
let boardArray = [];

// Initialize the board array
for (let i = 0; i < ROWS; i++) {
  boardArray.push([]);
  for (let j = 0; j < COLS; j++) {
    boardArray[i][j] = EMPTY;
  }
}

// Update the board array and the UI with the current player's move
function makeMove(column) {
  for (let i = ROWS - 1; i >= 0; i--) {
    if (boardArray[i][column] === EMPTY) {
      boardArray[i][column] = currentPlayer;
      cells[i * COLS + column].classList.add(currentPlayer === PLAYER_1 ? 'player1' : 'player2');

      if (checkWin(i, column)) {
        playerTurn.textContent = `Player ${currentPlayer} wins!`;
        gameOver = true;
        return;
      }

      if (checkDraw()) {
        playerTurn.textContent = 'Draw!';
        gameOver = true;
        return;
      }

      currentPlayer = currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1;
      playerTurn.textContent = `Player ${currentPlayer}'s turn`;
      return;
    }
  }
}

// Check if there is a winning sequence on the board
function checkWin(row, col) {
  const sequence = currentPlayer === PLAYER_1 ? [PLAYER_1, PLAYER_1, PLAYER_1, PLAYER_1] : [PLAYER_2, PLAYER_2, PLAYER_2, PLAYER_2];

  // Check horizontal
  let count = 0;
  for (let j = 0; j < COLS; j++) {
    if (boardArray[row][j] === currentPlayer) {
      count++;
      if (count === 4) return true;
    } else {
      count = 0;
    }
  }

  // Check vertical
  count = 0;
  for (let i = 0; i < ROWS; i++) {
    if (boardArray[i][col] === currentPlayer) {
      count++;
      if (count === 4) return true;
    } else {
      count = 0;
    }
  }

  // Check diagonal (top-left to bottom-right)
  let startRow = row - Math.min(row, col);
  let startCol = col - Math.min(row, col);
  count = 0;
  while (startRow < ROWS && startCol < COLS) {
    if (boardArray[startRow][startCol] === currentPlayer) {
      count++;
      if (count === 4) return true;
    } else {
      count = 0;
    }
    startRow++;
    startCol++;
  }

  // Check diagonal (bottom-left to top-right)
  startRow = row + Math.min(ROWS - 1 - row, col);
  startCol = col - Math.min(ROWS - 1 - row, col);
  count = 0;
  while (startRow >= 0 && startCol < COLS) {
    if (boardArray[startRow][startCol] === currentPlayer) {
      count++;
      if (count === 4) return
