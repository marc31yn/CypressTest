import homeSaucePage from "../../pages/saucedemo/homeSaucePage";
import inventoryPage from "../../pages/saucedemo/inventoryPage";

describe('POM Implemation', () => { 

    beforeEach(function(){
        cy.visit('https://www.saucedemo.com/');

        cy.fixture('data-driven/sauceUsers')
        .then(credentials =>{
            this.credentials = credentials;
        });
    });

    it('Success Login', function(){

        homeSaucePage.typeUsername(this.credentials.username);
        homeSaucePage.typePassword(this.credentials.password);
        homeSaucePage.clickLoginBtn();

        inventoryPage.elements.titleSpan().should('contains.text',this.credentials.expected);
        cy.location('pathname').should('eq','/inventory.html');    
    });

    it('Failed Login', function(){
        
        homeSaucePage.typeUsername(this.credentials.username);
        homeSaucePage.typePassword('12345');
        homeSaucePage.clickLoginBtn();

        homeSaucePage.elements.errorMessage().should('contains.text',this.credentials.error_message);

    });
    
    
})