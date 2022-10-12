// Hooks -> Mocha

// 1. before -> Una vez, al principio
// 2. beforeEach() -> Antes de cada test
// 3. TEST EXECUTION
// 4. afterEach() -> Despues de cada test
// 5. beforeEach() -> Antes de cada test
// 6. TEST EXECUTION
// 7. afterEach() -> Despues de cada test
// 8. after() -> Una vez, al final 


// Skip - Only

describe('Demo de hooks', function() { 

    before(function() {
        cy.log('Before');
    });

    beforeEach(function() {
        cy.log('Before Each');
    });

    it.skip('should be test #1', function() {
        console.log('Test #01');
    });

    it.only('should be test #2', function() {
        console.log('Test #02');
    });

    it.only('should be test #3', function() {
        console.log('Test #03');
    });

    afterEach(function() {
        cy.log('After Each');
    });

    after(function() {
        cy.log('After');
    });

});
