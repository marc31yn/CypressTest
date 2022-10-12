 describe('COMMANDS TETS', () => { 
    
    it('Command browser', () => {

        cy.log(Cypress.browser)
        
    });

    it.skip('Comman DOM', () => {
        
        cy.visit('https://demoqa.com/accordian');

        cy.get('.collapse').eq(6).then($elem => {
            cy.log(`State of the collapse as soon as I load the website: ${Cypress.dom.isVisible($elem) }`)
            
        });
    });

    it('Command ARC', () => {
        
        cy.log(Cypress.arch)

    });

    it('Command Keyboard', () => {
        cy.visit('https://www.saucedemo.com/');


        Cypress.Keyboard.defaults({
            keystrokeDelay: 2000
        });

        cy.get('[data-test="username"]').type('standard_user');

    });

    it('Command Keyboard', {keystrokeDelay: 150},() => {
        cy.visit('https://www.saucedemo.com/');

        cy.get('[data-test="username"]').type('standard_user');

    });
    

})

