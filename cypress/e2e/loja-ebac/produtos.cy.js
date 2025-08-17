/// <reference types="cypress"/>
import produtosPage from "../../support/page-objects/Produtos.page";

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
    });
    
    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Atlas Fitness Tank')
        cy.get('.product_title').should('contain' , 'Atlas Fitness Tank')
    });

    it('Deve buscar um prouto com sucesso', () => {
        let produto = 'Apollo Running'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain' , produto)
    });

    it('Deve visitar a página do produto ', () => {
        produtosPage.visitarProduto('Celeste Sports Bra')
        cy.get('.product_title').should('contain' , 'Celeste Sports Bra')
    });

    it('Deve adicionar produto ao carrinho', () => {
        let qtd = 7
        produtosPage.buscarProduto('Aero Daily Fitness Tee')
        produtosPage.addProdutoCarrinho('S' , 'Brown' , qtd)
        cy.get('.woocommerce-message').should('contain' , qtd + ' × “Aero Daily Fitness Tee” foram adicionados no seu carrinho.')
    });

    it('Deve adicionar produto ao carrinho buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados => {
            produtosPage.buscarProduto(dados[2].nomeProduto)
        produtosPage.addProdutoCarrinho(
            dados[2].tamanho,
            dados[2].cor,
            dados[2].quantidade
        )
        cy.get('.woocommerce-message').should('contain' , dados[2].nomeProduto)
        }) 


        
    });
});