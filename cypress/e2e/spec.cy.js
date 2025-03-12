
describe('Tic-Tac-Toe Game', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  // UI Tests
  it('TC01: Should display a game board with 9 clickable squares', () => {
    cy.get('.square').should('have.length', 9);
  });

  it('TC02: Should display the "Reset" button', () => {
    cy.get('.reset').should('be.visible');
  });

  it('TC03: Should display the current player correctly', () => {
    cy.contains('Next Player: X').should('be.visible');
  });

  // Gameplay Tests
  it('TC04: Should mark an empty square with the current player\'s symbol', () => {
    cy.get('.square').eq(0).click().should('contain', 'X');
  });

  it('TC05: Should not change the symbol if the square is already marked', () => {
    cy.get('.square').eq(0).click().should('contain', 'X');
    cy.get('.square').eq(0).click().should('contain', 'X'); // No change
  });

  it('TC06: Should change the current player after a valid move', () => {
    cy.get('.square').eq(0).click();
    cy.contains('Next Player: O').should('be.visible');
  });

  it('TC07: Should detect a win when a player aligns three symbols horizontally', () => {
    cy.get('.square').eq(0).click(); // X
    cy.get('.square').eq(3).click(); // O
    cy.get('.square').eq(1).click(); // X
    cy.get('.square').eq(4).click(); // O
    cy.get('.square').eq(2).click(); // X - Wins
    cy.contains('Winner: X').should('be.visible');
  });

  it('TC08: Should display the winning message and disable further moves after a win', () => {
    cy.get('.square').eq(0).click(); // X
    cy.get('.square').eq(3).click(); // O
    cy.get('.square').eq(1).click(); // X
    cy.get('.square').eq(4).click(); // O
    cy.get('.square').eq(2).click(); // X - Wins
    cy.contains('Winner: X').should('be.visible');
    cy.get('.square').eq(3).click(); // Try to click again
    cy.get('.square').eq(3).should('contain', 'O'); // No change
  });

  it('TC09: Should detect a draw when all squares are filled with no winner', () => {
    const moves = [0, 1, 2, 4, 3, 5, 7, 6, 8]; // X and O moves to make a draw
    moves.forEach((index, i) => {
      cy.get('.square').eq(index).click();
      cy.contains(`Next Player: ${i % 2 === 0 ? 'O' : 'X'}`).should('be.visible');
    });
    cy.contains('Next Player: X').should('not.exist');
    cy.contains('Winner:').should('not.exist');
  });

  it('TC10: Should display a draw message when all squares are filled with no winner', () => {
    const moves = [0, 1, 2, 4, 3, 5, 7, 6, 8]; // X and O moves to make a draw
    moves.forEach(index => cy.get('.square').eq(index).click());
    cy.contains('Winner:').should('not.exist');
  });

  // Reset Functionality Tests
  it('TC11: Should clear the board and start a new game after clicking the "Reset" button', () => {
    cy.get('.square').eq(0).click().should('contain', 'X');
    cy.get('.reset').click();
    cy.get('.square').each(square => {
      cy.wrap(square).should('be.empty');
    });
  });

  it('TC12: Should reset the current player to "X" after clicking the "Reset" button', () => {
    cy.get('.square').eq(0).click(); // X
    cy.get('.square').eq(1).click(); // O
    cy.get('.reset').click();
    cy.contains('Next Player: X').should('be.visible');
  });
});
