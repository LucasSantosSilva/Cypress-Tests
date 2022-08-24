
describe('Texo IT APIs', () => {
    it('GET - Pesquisando pelo atributo name', () => {
        const nameURL = "comments?name=alias odio sit"
        const email = 'Lew@alysha.tv'
        cy.request({
            method: 'GET',
            url: Cypress.config().baseUrl + nameURL,
            json: true,

        }).then((resp) => {
            const emailRequest = resp.body[0].email
            expect(emailRequest).to.eq(email)
            expect(resp.status).to.eq(200)
        })
    })

    it('POST - Criar usuário', () => {
        const nameURL = 'users'
        cy.request({
            method: 'POST',
            url: Cypress.config().baseUrl + nameURL,
            body: {
                "name": "Leanne Graham",
                "username": "Bret",
                "email": "Sincere@april.biz",
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "lat": "-37.3159",
                "lng": "81.1496",
                "phone": "1-770-736-8031 x56442",
                "website": "hildegard.org",
                "name": "Romaguera-Crona",
                "catchPhrase": "Multi-layered client-server neural-net",
                "bs": "harness real-time e-markets"
            }
        }).then((resp) => {
            const idRequest = resp.body.id
            expect(idRequest).to.eq(11)
            expect(resp.status).to.eq(201)
        })

    })
})

