describe('App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    });

    it('Loads the app', () => {
        const counter = cy.get('#counter')
        counter.should('contain', '0')
    });
})