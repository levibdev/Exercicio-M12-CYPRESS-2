/// <reference types="cypress"/>

import { faker } from '@faker-js/faker';

describe('Funcionalidade : Cadastro' , () => {
    
    
    beforeEach (() => {

        cy.visit('minha-conta')

    });

    it('Deve completar cadastro' , () => {
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type("teste2025")
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should("exist")

    }); 


});