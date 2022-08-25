import 'cypress-mochawesome-reporter/register';

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
                "name": "Lucas Teste",
                "username": "Bret",
                "email": "Sincere@april.biz",
                "address": {
                    "street": "Kulas Light",
                    "suite": "Apt. 556",
                    "city": "Gwenborough",
                    "zipcode": "92998-3874",
                    "geo": {
                        "lat": "-37.3159",
                        "lng": "81.1496",
                    },
                },
                "phone": "1-770-736-8031 x56442",
                "website": "hildegard.org",
                "company": {
                    "name": "Romaguera-Crona",
                    "catchPhrase": "Multi-layered client-server neural-net",
                    "bs": "harness real-time e-markets"
                },
            }
        }).then((resp) => {
            const idRequest = resp.body.id
            expect(idRequest).to.eq(11)
            expect(resp.status).to.eq(201)
        })
    })

    it('PUT - Altera usuário', () => {
        const nameURL = 'users/5'
        cy.request({
            method: 'PUT',
            url: Cypress.config().baseUrl + nameURL,
            body: {
                "email": "Alterado@april.biz",
                "address" : {
                    "geo" : {
                        "lat": "40.0000",
                        "lng": "100.0000"
                    }
                }
            }
        }).then((resp) => {
            expect(resp.body.email).to.eq('Alterado@april.biz')
            expect(resp.body.address.geo.lat).to.eq('40.0000')
            expect(resp.body.address.geo.lng).to.eq('100.0000')
            expect(resp.status).to.eq(200)
        })
    })
})

