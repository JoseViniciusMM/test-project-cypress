/// <reference types="cypress" />

import { should } from "chai"
describe('Fluxo login', () => {

    it('Não deve permitir um email inválido', () => {
        cy.getByData('botao-login').click()
        // removeAttr('type') é necess´rio para contornar a validação HTML5 do navegador
        // e deixar a validação Yup (JavaScript) ser acionado
        cy.getByData('email-input').invoke('removeAttr', 'type').type('teste@alura');
        cy.getByData('senha-input').type('123456');
        cy.getByData('botao-enviar').click();
        cy.getByData('mensagem.erro').should('exist').and('have.text', 'O email digitado não é válido')
    })

    it('Não deve permitir um email em branco', () => {
        cy.getByData('botao-login').click()
        cy.getByData('email-input').invoke('removeAttr', 'type').type(' ');
        cy.getByData('senha-input').type('123456');
        cy.getByData('botao-enviar').click();
        cy.getByData('mensagem.erro').should('exist').and('have.text', 'O email é obrigatório')
    })

    it('Deve realizar login com sucesso', () => {
        cy.login('neilton@alura.com', '123456');
        cy.contains('p', 'Olá, Neilton').should('be.visible');
    });
})

