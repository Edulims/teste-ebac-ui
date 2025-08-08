/// <reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });
    
    it('Deve selecionar um produto da lista', () => {
        
        cy.get('.product-block')
            //.first() -primeiro
            //.last() -ultimo
            //.eq(2) -posição
            .contains('Ajax Full-Zip Sweatshirt')
            .click()

        //cy.get('#tab-title-description').should('exist')
        cy.get('#tab-title-description').should('contain','Descrição')

    });
});