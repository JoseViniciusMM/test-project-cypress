<reference types="cypress" />

describe('Fluxo login', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Deve realizar login com sucesso', () => {
        cy.get('[data-test="botao-login"]').click()
        cy.get('[data-test="input-nome]').type('Nielton Seguins')
        cy.get(' ')