/// <reference types="cypress"/>

describe('Funcionalidade: Detalhes da conta', () => {
    
    beforeEach(() => {
        cy.visit('my-account/edit-account')
        cy.fixture('perfil').then(login => {
            cy.login(login.usuario, login.senha)
        })
        
    });

    it('Deve completar detalhes da conta com sucesso', () => {
        
        cy.detalhesConta('Eduardo', 'Lima', 'edu.lima')
        cy.get('.woocommerce-message').should('contain' , 'Detalhes da conta modificados com sucesso.')

    });

});