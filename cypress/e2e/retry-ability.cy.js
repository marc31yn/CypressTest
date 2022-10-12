function login(user, pss) {
    cy.get('[data-test="username"]')
        .type(user);

    cy.get('[data-test="password"]')
        .type(pss);

    cy.get('[data-test="login-button"]')
        .click();    
}

describe('Sesion de Retry-Ability', function () {
    
    beforeEach(() => {   
        cy.visit('https://www.saucedemo.com/');       
    });

    afterEach(() => {
    });    

    it('Wrong Login', () => {  
        login('standard_user','1235');

        cy.get('[data-test="error"]')
        .should('be.visible')
        .contains('Epic sadface:');
    });

    it('Login', () => {   
        login('standard_user','secret_sauce');
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')

    });

    it('TestPractice', () => {   
        console.log('Test #01');    
        
        cy.get('input', {timeout: 20000}) //comand
        .should('have.length',3); //Assertion
        
        cy.get('input')
        .eq(2)
        .should('contain.value','Login');

        // cy.get('input')
        // .eq(0)
        // .should('have.attr', 'placeholder','Username');

        let lista = cy.get('input');
        lista
        .eq(0)
        .should('have.attr', 'placeholder','Username');

        // Como usar el console log de Cypress
        
        cy.get('[data-test="username"]').then(($btn) => {
            
            let txt = $btn.attr('placeholder');
            
            cy.log('ver log');
            cy.log(txt);   
            
        });

        
        cy.get('[data-test="username"]').invoke('attr','placeholder').then(cy.log)

    });

});
