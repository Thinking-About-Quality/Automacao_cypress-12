///<reference types="cypress" />

describe('Funcionalidade Página de Produtos', () => {
    beforeEach(() => {
        cy.visit('produtos')
    })
    afterEach(() => {
        //cy.screenshot()
    });
    it('Deve selecionar produto da lista ', () => {
        cy.get('[class="product-block grid"]')
            .contains('Ariel Roll Sleeve Sweatshirt')
            .click()
    });
    it('Deve adicionar o produto ao carrinho', () => {
        var quantidade = 10

        cy.get('[class="product-block grid"]')
            .contains('Ariel Roll Sleeve Sweatshirt').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Purple').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain',quantidade )
        cy.get('.woocommerce-message').should('contain',quantidade+ ' × “Ariel Roll Sleeve Sweatshirt” foram adicionados no seu carrinho')

    });
    it('Deve adicionar produtos ao carrinho- Usando Comando customizado', () => {
        cy.addProdutos('Aero Daily Fitness Tee','M','Black',2)
    });
    it.only('Deve adicionar produtos ao carrinho- Usando Comando customizado', () => {
        cy.addProdutos('Ariel Roll Sleeve Sweatshirt','XS','Red',5)
    });
})