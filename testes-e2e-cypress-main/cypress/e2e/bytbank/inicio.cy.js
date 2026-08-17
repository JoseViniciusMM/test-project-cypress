/// <reference types="cypress" />

import { should } from "chai"

describe('Teste UI ByteBank', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('Deve renderizar o titulo principal', () => {
        cy.get('[data-test="titulo-principal"]').contains('Experimente mais liberdade no controle da sua vida').should('be.visible')
    })
    
    it('Deve renderizar o titulo 1 card', () => {
        cy.contains('h3','Conta e cartão gratuitos').should(be.visible)
    })

    it('Deve renderizar o titulo 2 card', () => {
        cy.contains('h3','Saques sem custo').should(be.visible)
    })

    describe('Botao pagina incial', () => {
        it('Deve renderizar os botões', () => {
            cy.get('[data-test="botao-cadastro"]').contains('Abrir minha conta');
            cy.get('[data-test="botao-login"]').contains('Já tenho conta');
        })
    })
})