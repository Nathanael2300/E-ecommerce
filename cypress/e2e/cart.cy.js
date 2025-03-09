describe('E-commerce Saucedemo - Carrinho', () => {
    beforeEach(() => {cy.visit('/'),cy.login()});
    it('Deve adcionar um item no carrinho', () => {
        cy.get('.inventory_item_name').contains('Sauce Labs Fleece Jacket')
        .should('be.visible').click();
        cy.get('[data-test="add-to-cart"]').click();
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.get('.inventory_item_name').contains('Sauce Labs Fleece Jacket').should('be.visible')
    });

    it('Deve deletar o item do carrinho', () => {
        cy.get('.inventory_item_name').contains('Sauce Labs Fleece Jacket')
        .should('be.visible').click();
        cy.get('[data-test="add-to-cart"]').click();
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.get('.inventory_item_name').contains('Sauce Labs Fleece Jacket').should('be.visible');
        cy.get('[data-test="remove-sauce-labs-fleece-jacket"]').click();
        cy.contains('Sauce Labs Fleece Jacket').should('not.exist');
    })
});