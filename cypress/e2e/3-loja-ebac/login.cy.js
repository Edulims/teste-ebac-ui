/// <reference types="cypress"/>

describe('Funcionalidade: login', () => {
    it('Deve fazer login com sucesso', () => {
        cy.visit('lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('eduardo.teste@teste.com.br')
        cy.get('#password').type('123098')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, eduardo.teste (não é eduardo.teste? Sair)' )
    })
})