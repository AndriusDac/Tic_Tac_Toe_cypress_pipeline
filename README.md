# Tic-Tac-Toe Game

A simple Tic-Tac-Toe game built with **React**. The game allows two players to take turns as "X" and "O" and determines the winner based on the classic Tic-Tac-Toe rules. The game also includes a **Reset** button to start a new game.

## Features

- Playable Tic-Tac-Toe game with interactive squares.
- Displays the current player and the winner.
- Reset button to start a new game.
- Simple and responsive design.
- Tested with **Cypress** for end-to-end testing.

## Technologies Used

- React
- JavaScript
- HTML & CSS (inline styling)
- Cypress (for testing)

## Getting Started

### Prerequisites

Make sure you have **Node.js** and **npm** installed.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/username/tic-tac-toe.git
   cd tic-tac-toe
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Running the Application

Start the development server:

```bash
npm run dev
```

Open your browser and navigate to:

```
http://localhost:5173/
```

### Running Tests

This project uses **Cypress** for testing. To run the tests, use the following commands:

1. Open the Cypress interface:
   ```bash
   npx cypress open
   ```

2. Run all tests from the Cypress UI.

Alternatively, you can run tests directly from the command line:

```bash
npx cypress run
```

## Test Cases (TC)

🔹 TC01: Verify that the game board is displayed with 9 clickable squares.  
🔹 TC02: Verify that the "Reset" button is displayed.  
🔹 TC03: Verify that the current player ("X" or "O") is displayed correctly.  
🔹 TC04: Verify that clicking on an empty square marks it with the current player's symbol ("X" or "O").  
🔹 TC05: Verify that clicking on an already marked square does not change its symbol.  
🔹 TC06: Verify that the current player changes after a valid move.  
🔹 TC07: Verify that the game detects a win when a player aligns three symbols horizontally, vertically, or diagonally.  
🔹 TC08: Verify that the game displays the winning message and disables further moves after a win.  
🔹 TC09: Verify that the game detects a draw when all squares are filled with no winner.  
🔹 TC10: Verify that the game displays a draw message.  
🔹 TC11: Verify that clicking the "Reset" button clears the board and starts a new game.  
🔹 TC12: Verify that the current player is reset to "X" after clicking the "Reset" button.  

## Project Structure

```
├── src
│   └── App.jsx     # Main React component
├── cypress
│   └── e2e
│       └── tic-tac-toe.cy.js  # Cypress tests
├── public
├── package.json
└── README.md
```

## Acknowledgments

- Inspired by classic Tic-Tac-Toe games.
- Built with 💙 using React.

