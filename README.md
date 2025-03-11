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

## How to Play

1. Click on any empty square to place your mark (either **X** or **O**).
2. Alternate turns between players.
3. The game will announce the winner or a tie.
4. Click the **Reset** button to start a new game.

## License

This project is licensed under the MIT License.

## Acknowledgments

- Inspired by classic Tic-Tac-Toe games.
- Built with 💙 using React.

