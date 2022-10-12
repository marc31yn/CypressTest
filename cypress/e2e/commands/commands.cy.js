
describe('Commands Examples', function() { 
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
        
    }); 

    it('Success Login Test', function() {
        
        cy.typeLogin('standard_user','secret_sauce');   
        cy.get('.title').should('contain.text','Products')
        cy.logout();
        cy.url().should('eq','https://www.saucedemo.com/');    
    });

    it('Failed Login Test', function() {
        
        cy.typeLogin('standard_user','12345');   
        cy.get('[data-test="error"]')
        .should('be.visible')
        .and('contain.text','Epic sadface');
        // .contains('Epic sadface:');
        cy.url().should('eq','https://www.saucedemo.com/');    
    });

    afterEach(() => {
        
    });
})