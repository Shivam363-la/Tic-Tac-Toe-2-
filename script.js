let board = ['', '', '', '', '', '', '', '', '']; // Tracks the game board state
let currentPlayer = 'X'; // Starts with player 'X'
let gameActive = true; // Track if the game is still ongoing
let victorySound = new Audio('audio/ffirework.mp3'); // Store the audio in a variable

const statusDisplay = document.querySelector('#status');
const cells = document.querySelectorAll('.cell');
const resetButton = document.querySelector('#reset');
const fireworksContainer = document.createElement('div');
fireworksContainer.classList.add('fireworks');
document.body.appendChild(fireworksContainer); // Append fireworks to the body

// Game win conditions
const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
];

// Update the game status
function updateStatus() {
    if (checkWinner(currentPlayer)) {
        statusDisplay.innerHTML = `<span id="winner-status">Player ${currentPlayer} Wins!</span>`;
        fireworksCelebration();
        gameActive = false;
        return;
    }
    if (board.every(cell => cell !== '')) {
        statusDisplay.textContent = 'It\'s a draw!';
        gameActive = false;
        return;
    }
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Switch turn
    statusDisplay.textContent = `Player ${currentPlayer}'s turn`;
}

// Handle cell click
function handleCellClick(event) {
    const clickedCellIndex = event.target.getAttribute('data-cell');
    if (board[clickedCellIndex] !== '' || !gameActive) return;
    board[clickedCellIndex] = currentPlayer;
    event.target.textContent = currentPlayer;  // Display 'X' or 'O' inside the cell
    updateStatus();
}

// Check if a player has won
function checkWinner(player) {
    return winConditions.some(condition => {
        return condition.every(index => board[index] === player);
    });
}

// Fireworks and Victory Sound Effect
function fireworksCelebration() {
    fireworksContainer.style.animation = 'fireworks-animation 1s ease-out';
    victorySound.play()
        .then(() => {
            console.log('Victory sound played successfully!');
        })
        .catch((error) => {
            console.error('Error playing victory sound. Check the file path or browser policies:', error);
        });
}

// Reset the game
function resetGame() {
    // Stop any audio currently playing
    victorySound.pause(); 
    victorySound.currentTime = 0; // Reset the audio to the beginning

    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;
    cells.forEach(cell => cell.textContent = ''); // Clear all cells
    statusDisplay.textContent = `Player ${currentPlayer}'s turn`;
    fireworksContainer.style.animation = ''; // Reset the fireworks animation
}

// Add event listeners
cells.forEach(cell => cell.addEventListener('click', handleCellClick));
resetButton.addEventListener('click', resetGame);


// Update the game status when a player wins
function updateStatus() {
    if (checkWinner(currentPlayer)) {
        if (currentPlayer === 'X') {
            statusDisplay.innerHTML = `<span id="winner-status-x">Player X Wins!</span>`;
        } else {
            statusDisplay.innerHTML = `<span id="winner-status-o">Player O Wins!</span>`;
        }
        fireworksCelebration();
        gameActive = false;
        return;
    }
    if (board.every(cell => cell !== '')) {
        statusDisplay.textContent = 'It\'s a draw!';
        gameActive = false;
        return;
    }
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Switch turn
    statusDisplay.textContent = `Player ${currentPlayer}'s turn`;
}


// Update the game status when a player wins
function updateStatus() {
    if (checkWinner(currentPlayer)) {
        if (currentPlayer === 'X') {
            statusDisplay.innerHTML = `<span id="winner-status-x">Player X Wins!</span>`;
        } else {
            statusDisplay.innerHTML = `<span id="winner-status-o">Player O Wins!</span>`;
        }
        fireworksCelebration();
        gameActive = false;
        return;
    }
    if (board.every(cell => cell !== '')) {
        statusDisplay.textContent = 'It\'s a draw!';
        gameActive = false;
        return;
    }
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Switch turn
    statusDisplay.textContent = `Player ${currentPlayer}'s turn`;
}








