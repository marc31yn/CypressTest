describe('Location Demo',function() {

    beforeEach(function(){
        cy.visit('https://www.saucedemo.com/');
    });

    it('should have title Swag Labs', function() {        
        cy.title().should('eq','Swag Labs');
    });

    it('URL shuld be https://www.saucedemo.com/', function(){
        cy.url().should('eq','https://www.saucedemo.com/');
    });

    it('Should use https',function () {
        cy.location('protocol').should('contains','https');
    })

    it('Should have hostname www.saucedemo.com', function () {
        cy.location('hostname').should('eq','www.saucedemo.com');
    })

    it('should redirect to /inventory', function () {
        cy.get('#user-name')
        .type('standard_user');

         cy.get('[data-test="password"]')
        .type('secret_sauce');

         cy.get('[data-test="login-button"]')
        .click();

        cy.location('pathname').should('eq','/inventory.html');
    });

    it('FILTER Method', function(){
        cy.get('input').filter('[type="text"]').type('using filter');
    });

    it('FIND Method', function(){
        cy.get('form').find('input').eq(0).type('using find method');
    });
})