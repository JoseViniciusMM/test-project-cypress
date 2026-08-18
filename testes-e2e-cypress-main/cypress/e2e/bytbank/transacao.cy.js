/// <reference types="cypress" />

import { should } from "chai"
describe('Fluxo login', () => { 
    it('Deve realizar login com sucesso e realizar transação', () => {
        cy.login('neilton@alura.com', '123456');
        cy.contains('p', 'Olá, Neilton').should('be.visible');
        
        cy.location('pathname').should('eq','/home'); 
        // selecionar opção 'Depósito'
        cy.getByData('select-opcoes').select('Depósito');

        // preencher valor e submeter
        cy.getByData('form-input').clear().type('100');
        cy.getByData('realiza-transacao').click();

        // verificar última transação contém o valor
        cy.getByData('lista-transacoes').last().within(() => {
            cy.getByData('valorTransacao').should('contain', '100,00');
        });

        cy.getByData('botao-sair').click();
        cy.location('pathname').should('eq','/'); 
    });
});