describe('Practice Testc', () => {
  it('Open browser', () => {
    cy.visit('https://example.cypress.io');
    cy.url().should('eq', 'https://example.cypress.io/')
  })
})