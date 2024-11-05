let balance = 0;
const SYMBOLS = ["A", "B", "C", "D"];
const SYMBOLS_COUNT = { A: 2, B: 4, C: 6, D: 8 };
const SYMBOL_VALUES = { A: 5, B: 4, C: 3, D: 2 };
const ROWS = 3;
const COLS = 3;

// Get elements
const balanceDisplay = document.getElementById("balance");
const depositButton = document.getElementById("depositButton");
const spinButton = document.getElementById("spinButton");
const betButton = document.getElementById("betButton");
const playAgainButton = document.getElementById("playAgainButton");
const depositAmountInput = document.getElementById("depositAmount");
const betAmountInput = document.getElementById("betAmount");
const linesInput = document.getElementById("lines");
const slotRows = [document.getElementById("slotRow1"), document.getElementById("slotRow2"), document.getElementById("slotRow3")];
const resultMessage = document.getElementById("resultMessage");

// Deposit money
depositButton.addEventListener("click", () => {
  const depositAmount = parseFloat(depositAmountInput.value);
  if (depositAmount > 0) {
    balance += depositAmount;
    balanceDisplay.innerText = `$${balance}`;
    depositAmountInput.value = "";
    betButton.disabled = false;
  } else {
    alert("Enter a valid deposit amount!");
  }
});

// Set bet and lines
betButton.addEventListener("click", () => {
  const betAmount = parseFloat(betAmountInput.value);
  const lines = parseInt(linesInput.value);

  if (lines < 1 || lines > 3 || isNaN(lines)) {
    alert("Choose lines between 1 and 3.");
    return;
  }

  if (betAmount <= 0 || isNaN(betAmount)) {
    alert("Enter a valid bet amount.");
    return;
  }

  if (betAmount * lines > balance) {
    alert("Insufficient balance.");
    return;
  }

  spinButton.disabled = false;
  playAgainButton.disabled = true;
  balance -= betAmount * lines;
  balanceDisplay.innerText = `$${balance}`;
});

// Spin function
spinButton.addEventListener("click", () => {
  const symbolsArray = createSymbolsArray();
  const reels = spin(symbolsArray);
  const rows = transpose(reels);
  animateRows(rows);
  
  const betAmount = parseFloat(betAmountInput.value);
  const lines = parseInt(linesInput.value);
  const winnings = calculateWinnings(rows, betAmount, lines);
  balance += winnings;
  balanceDisplay.innerText = `$${balance}`;
  resultMessage.innerText = winnings > 0 ? `You won $${winnings}!` : "No win, try again!";
  
  spinButton.disabled = true;
  playAgainButton.disabled = balance > 0 ? false : true;
});

// Play Again
playAgainButton.addEventListener("click", () => {
  betAmountInput.value = "";
  linesInput.value = "";
  resultMessage.innerText = "";
  spinButton.disabled = true;
  playAgainButton.disabled = true;
});

function createSymbolsArray() {
  const symbols = [];
  for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
    for (let i = 0; i < count; i++) {
      symbols.push(symbol);
    }
  }
  return symbols;
}

function spin(symbols) {
  const reels = [];
  for (let i = 0; i < COLS; i++) {
    reels.push([]);
    const reelSymbols = [...symbols];
    for (let j = 0; j < ROWS; j++) {
      const randomIndex = Math.floor(Math.random() * reelSymbols.length);
      const selectedSymbol = reelSymbols.splice(randomIndex, 1)[0];
      reels[i].push(selectedSymbol);
    }
  }
  return reels;
}

function transpose(reels) {
  const rows = [];
  for (let i = 0; i < ROWS; i++) {
    rows.push([]);
    for (let j = 0; j < COLS; j++) {
      rows[i].push(reels[j][i]);
    }
  }
  return rows;
}

function animateRows(rows) {
  rows.forEach((row, index) => {
    slotRows[index].classList.add("reel");
    setTimeout(() => {
      slotRows[index].innerText = row.join(" | ");
      slotRows[index].classList.remove("reel");
    }, 1000);
  });
}

function calculateWinnings(rows, bet, lines) {
  let winnings = 0;
  for (let i = 0; i < lines; i++) {
    const symbols = rows[i];
    if (symbols.every(symbol => symbol === symbols[0])) {
      winnings += bet * SYMBOL_VALUES[symbols[0]];
    }
  }
  return winnings;
}
