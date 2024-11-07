

# Slot Machine Game 🎰

A simple slot machine game built using HTML, CSS, and JavaScript. The game allows players to deposit an amount, place bets on multiple lines, and spin the reels to test their luck. 

# Live Demo 

[slot machine game] : https://zenoguy.github.io/Slot-Machine-Game/

## Features

1. **Deposit Funds**: Start by depositing an amount, which sets your starting balance.
2. **Bet on Lines**: Choose how many lines to bet on (1-3).
3. **Place Bets**: Enter the amount to bet per line.
4. **Spin the Reels**: Test your luck by spinning the reels to see if you win!
5. **Calculate Winnings**: Winnings are calculated based on matching symbols on each line you bet on.
6. **Play Again Option**: Continue playing as long as you have a positive balance.

## Game Logic

The game follows a series of steps:

1. **Deposit Funds**: Input the amount you want to deposit as your balance.
2. **Select Lines and Bet Amount**: Choose the number of lines to bet on (1-3) and the amount per line.
3. **Spin the Reels**: The slot machine will randomly spin and generate symbols in each row.
4. **Check for Wins**: Matching symbols on a line pay out according to their predefined values.
5. **View Balance and Play Again**: After each spin, winnings are added to the balance, and players can choose to play again.

## How to Use

1. Clone or download the project files.
2. Open `index.html` in a browser to start the game.
3. Deposit an amount in the "Deposit Amount" field, then click **Deposit**.
4. Enter the number of lines to bet on and the bet amount per line.
5. Click **Place Bet** to lock in your choices.
6. Click **Spin** to play the game.
7. Check your balance, winnings, and messages after each spin to see your game progress.

## Requirements

- Basic knowledge of HTML, CSS, and JavaScript.
- A modern browser to run the game.

## Project Structure

- `index.html`: The main HTML file that contains the game structure.
- `style.css`: The CSS file for styling the game.
- `script.js`: The JavaScript file containing the game logic.

## Customization

You can customize the following:

- **Symbol values**: Edit `SYMBOL_VALUES` in `script.js` to change payout values for symbols.
- **Appearance**: Modify `style.css` to adjust colors, fonts, and animations.
- **Number of Rows/Columns**: Adjust `ROWS` and `COLS` in `script.js` to change the grid structure of the slot machine.

## Acknowledgments

This project was inspired by Tech With Tim's tutorial series. Check out his channel on YouTube for more fun and educational projects: [Tech With Tim's Slot Machine Tutorial](https://www.youtube.com/watch?v=E3XxeE7NF30&list=PLN7--LHC0o2fFIiQoUe8TtlZjxPVztXhq&index=3&t=37s). 
