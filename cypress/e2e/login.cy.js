describe('E-commerce Saucedemo - login de Usuário', () => {
  beforeEach(() => {cy.visit('/'),cy.login()});

  it('Deve estar exibido o icone do carrinho', () => {
    cy.get('.shopping_cart_link').should('be.visible')
  });

  it('Deve estar exibido um titulo escrito "Products"', () => {
    cy.get('.title').should('be.visible');
  })
});