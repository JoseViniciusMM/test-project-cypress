/// <reference types="cypress" />

import { should } from "chai"
describe('Fluxo login', () => { 
    it('Deve realizar login com sucesso', () => {
        cy.login('neilton@alura.com', '123456');
        cy.contains('p', 'Olá, Neilton').should('be.visible');
        
        cy.location('pathname').should('eq','/home'); 

        cy.getBydata('data-test="select-opcoes').click();
        cy.getBydata('data-test="select-opcoes').select('Depósito').click();

        cy.getBydata('data-test="form-input"').type('100');
        cy.getBydata('data-test="realiza-transacao"').click();
        
        cy.getBydata('data-test="lista-transacoes"').last().should('contain.data-testid="valorTransacao"', '100,00');

        cy.getBydata('botao-sair').click();
        cy.location('pathname').should('eq','/'); 
    });
});