import { faker } from '@faker-js/faker';
describe('E-commerce Saucedemo - Finalizar compra', () => {
    beforeEach(() => {cy.visit('/');cy.login()});
    it('Deve realizar a compra de um produto', () => {
        cy.get('.inventory_item_name').contains('Sauce Labs Fleece Jacket')
        .should('be.visible').click();
        cy.get('[data-test="add-to-cart"]').click();
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.get('.inventory_item_name').contains('Sauce Labs Fleece Jacket').should('be.visible');
        cy.get('[data-test="checkout"]').click();
        

        const firstName = faker.person.firstName(); 
        const lastName = faker.person.lastName();    
        const zipCode = faker.location.zipCode();


        cy.get('[data-test="firstName"]').type(firstName);
        cy.get('[data-test="lastName"]').type(lastName);
        cy.get('[data-test="postalCode"]').type(zipCode);
        
        cy.get('[data-test="continue"]').click();

        cy.get('.inventory_item_name').contains('Sauce Labs Fleece Jacket').should('be.visible');

        cy.get('[data-test="finish"]').click();

        cy.get('.complete-header').contains('Thank you for your order!').should('be.visible')
        cy.get('.complete-text').contains('Your order has been dispatched, and will arrive just as fast as the pony can get there!')
        .should('be.visible');

        cy.get('[data-test="back-to-products"]').click();

    });
});