
describe('Texo IT APIs', () => {
    it('GET - Pesquisando pelo atributo name', () => {
        const nameURL = "comments?name=alias odio sit"
        const email = 'Lew@alysha.tv'
        cy.request({
            method: 'GET',
            url: Cypress.config().baseUrl + nameURL,
            json: true,

        }).then((resp) => {
            const email = resp.body[0].email
            expect(email).to.eq(email)
            expect(resp.status).to.eq (200)
        })
    })
})

