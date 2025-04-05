/// <reference types="cypress"/>

import ProdutosPage from "../support/page_objects/nome-funcionliada.page";

describe('Funcionalidade : Produtos ', () => {

     beforeEach(() => {
        ProdutosPage.visitarUrl()


     });

     it('Deve selecionar um produto na lista' , () => {
        ProdutosPage.addProdutoCarrinho('Aero Daily Fitness Tee')
        cy.get('#tab-title-description > a').should("contain", 'Descrição')
        cy.get('.woocommerce-message').should('contain' , '4 × “Aero Daily Fitness Tee” foram adicionados no seu carrinho.')
    


     });



});