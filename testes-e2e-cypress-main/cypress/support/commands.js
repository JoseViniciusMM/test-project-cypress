// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (email, senha) => {
    cy.get('[data-test="botao-login"]').click()

    cy.get('[data-test="email-input"]').should('be.visible') // afirmacao de que deve ser visivel 
    cy.get('[data-test="senha-input"]').should('be.visible') // afirmacao de que deve ser visivel
    
    cy.get('[data-test="email-input"]').type(email)
    cy.get('[data-test="senha-input"]').type(senha)

    cy.get('[data-test="botao-enviar"]').click()
    
    cy.location('pathname').should('eq','/home'); // Afirmacão que deve me direcionar para a home
})


// -- This is a child command --
Cypress.Commands.add('getBydata', (seletor) => {
    return cy.get(`[data-test="${seletor}"]`)
})
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })