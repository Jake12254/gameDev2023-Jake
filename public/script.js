const cells = document.querySelectorAll('.grid-cell');
const message = document.querySelector('.message');
let currentPlayer = 'player1';
let gameFinished = false;

cells.forEach(cell => {
  cell.addEventListener('click', () => {
    if (!gameFinished && !cell.textContent) {
      cell.textContent = currentPlayer === 'player1' ? 'X' : 'O';
      cell.classList.add(currentPlayer);
      if (checkWin()) {
        message.textContent = `${currentPlayer} wins!`;
        gameFinished = true;
      } else if (checkDraw()) {
        message.textContent = `It's a draw!`;
        gameFinished = true;
      } else {
        currentPlayer = currentPlayer === 'player1' ? 'player2' : 'player1';
        message.textContent = `${currentPlayer}'s turn`;
      }
    }
  });
});

function checkWin() {
  const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  return winCombinations.some(combination => {
    return combination.every(index => {
      return cells[index].classList.contains(currentPlayer);
    });
  });
}

function checkDraw() {
  return [...cells].every(cell => {
    return cell.textContent !== '';
  });
}
