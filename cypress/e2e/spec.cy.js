

describe('Tic-Tac-Toe Game', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  it('should display the initial game state', () => {
    cy.get('.game h1').should('contain', 'Tic-Tac-Toe');
    cy.get('.game h2').should('contain', 'Next Player: X');
    cy.get('.board .square').should('have.length', 9).and('be.empty');
  });


  it('should not allow clicking on an already filled square', () => {
    const move = Cypress._.random(0, 8);
    cy.get(`.board .square:eq(${move})`).click().should('not.be.empty');
    cy.get(`.board .square:eq(${move})`).click().should('not.be.empty');
  });

  it('should determine a winner', () => {
    cy.get('.board .square:eq(0)').click(); // X
    cy.get('.board .square:eq(3)').click(); // O
    cy.get('.board .square:eq(1)').click(); // X
    cy.get('.board .square:eq(4)').click(); // O
    cy.get('.board .square:eq(2)').click(); // X wins
    cy.get('.game h2').should('contain', 'Winner: X');
  });



  it('should allow resetting the game', () => {
    cy.get('.board .square:eq(0)').click();
    cy.get('.reset').click();
    // cy.get('.game h2').should('contain', 'Next Player: X');
    cy.get('.board .square').should('be.empty');
  });
});


// describe('Tic-Tac-Toe Game', () => {
//   beforeEach(() => {
//     cy.visit('http://localhost:5173/');
//   });

//   it('should display the initial game state', () => {
//     for (let i = 0; i < 9; i++) {
//       cy.get(`[data-testid="square-${i}"]`).should('have.text', '');
//     }
//     cy.get('[data-testid="status"]').should('contain', 'Next Player: X');
//   });

//   it('should allow a player to make a move', () => {
//     cy.get('[data-testid="square-0"]').click();
//     cy.get('[data-testid="square-0"]').should('have.text', 'X');
//     cy.get('[data-testid="status"]').should('contain', 'Next Player: O');
//   });

//   it('should determine the winner', () => {
//     // X makes moves to win
//     cy.get('[data-testid="square-0"]').click(); // X
//     cy.get('[data-testid="square-3"]').click(); // O
//     cy.get('[data-testid="square-1"]').click(); // X
//     cy.get('[data-testid="square-4"]').click(); // O
//     cy.get('[data-testid="square-2"]').click(); // X

//     cy.get('[data-testid="status"]').should('contain', 'Winner: X');
//   });

//   it('should reset the game', () => {
//     cy.get('[data-testid="square-0"]').click();
//     cy.get('[data-testid="reset-button"]').click();
//     for (let i = 0; i < 9; i++) {
//       cy.get(`[data-testid="square-${i}"]`).should('have.text', '');
//     }
//     cy.get('[data-testid="status"]').should('contain', 'Next Player');
//   });
// });