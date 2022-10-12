//Load a fixed ser data locate in a file

describe('Fixtures Demo', function(){ 
     
    beforeEach(function(){
        cy.visit('https://www.saucedemo.com/');

        cy.fixture('fixtures-demos/sauceCredentials')
        .then(credentials =>{
            this.credentials = credentials;
        });
    });

    it('Standar user name', function(){

        cy.get('[data-test="username"]')
        .type(this.credentials.standarUser);

        cy.get('[data-test="password"]')
        .type(this.credentials.systemPassword);

        cy.get('[data-test="login-button"]')
        .click();    

        cy.get('.title').should('contains.text','Products');
    });


    it('Dummy user name', function(){

        cy.get('[data-test="username"]')
        .type(this.credentials.dummyUserName);

        cy.get('[data-test="password"]')
        .type(this.credentials.dummyPassword);

        cy.get('[data-test="login-button"]')
        .click();    
    });

    it('Lock user name', function(){

        cy.get('[data-test="username"]')
        .type(this.credentials.lockUserName);

        cy.get('[data-test="password"]')
        .type(this.credentials.systemPassword);

        cy.get('[data-test="login-button"]')
        .click();    
    });
})