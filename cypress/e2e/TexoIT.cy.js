import HomePage from "../../PageObject/HomePage.js"
import GuideVariables from "../../PageObject/GuidePage.js"

describe('Texo IT', () => {
  it('Verifica se acessa o menu guide', () => {
    const home = new HomePage();
    
    cy.visit(Cypress.config().baseUrl);
    home.menuGuide();
    cy.url().should('include', GuideVariables.URL)
  })
})