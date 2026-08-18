describe('Forumlario de Cadastro', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.getByData('botao-cadastro').click();
    });

    it('Deve renderizar o formulário de cadastro corretamente', () => {
        cy.getByData('nome-input').should('be.visible');
        cy.getByData('email-input').should('be.visible');
        cy.getByData('senha-input').should('be.visible');
    });

    it('Deve permitir o preenchimento do formulário de cadastro e redirecionar para a página de login', () => {
        const nome = faker.person.fullName();
        const email = faker.internet.email();
        cy.getByData('nome-input').type(nome);
        cy.getByData('email-input').type(email);
        cy.getByData('senha-input').type('password123456');
        cy.getByData('checkbox-input').check();
        cy.getByData('botao-enviar').click();
        cy.getByData('mensagem-sucesso').should('be.visible');
    });

    it('Deve validar os campos do preechimento do formulário de cadastro', () => {



    });
});