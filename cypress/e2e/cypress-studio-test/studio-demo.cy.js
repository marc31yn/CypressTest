/* ==== Test Created with Cypress Studio ==== */
it('Doing checkout', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('https://www.saucedemo.com/');
  cy.get('[data-test="username"]').clear('standard_user');
  cy.get('[data-test="username"]').type('standard_user');
  cy.get('[data-test="password"]').clear('secret_sauce');
  cy.get('[data-test="password"]').type('secret_sauce');
  cy.get('[data-test="login-button"]').click();
  cy.get(':nth-child(1) > .inventory_item_description').click();
  cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
  cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
  cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click();
  cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
  cy.get('[data-test="remove-sauce-labs-fleece-jacket"]').click();
  cy.get('[data-test="remove-test.allthethings()-t-shirt-(red)"]').click();
  cy.get('.shopping_cart_link').click();
  cy.get('[data-test="remove-sauce-labs-onesie"]').click();
  cy.get('[data-test="checkout"]').click();
  cy.get('[data-test="firstName"]').clear('M');
  cy.get('[data-test="firstName"]').type('Maria');
  cy.get('[data-test="lastName"]').clear();
  cy.get('[data-test="lastName"]').type('Alas');
  cy.get('[data-test="postalCode"]').clear('5');
  cy.get('[data-test="postalCode"]').type('503');
  cy.get('.checkout_buttons').click();
  cy.get('[data-test="continue"]').click();
  cy.get('[data-test="finish"]').click();
  /* ==== End Cypress Studio ==== */
});