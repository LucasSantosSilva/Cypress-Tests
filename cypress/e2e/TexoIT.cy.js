import HomePage from "../../PageObject/HomePage.js"
import GuidePage from "../../PageObject/GuidePage.js"
import AlbumsphtosPage from "../../PageObject/AlbumsphotosPage.js"

const home = new HomePage();
const guide = new GuidePage();
const albumsPhtos = new AlbumsphtosPage();

describe('Texo IT', () => {
  it('Verifica se acessa o menu guide', () => {
    
    cy.visit(Cypress.config().baseUrl);
    home.menuGuide();
    cy.url().should('include', guide.URL)
  })

  it('Navegar e abrir a rota /albums/1/photos', () => {
    guide.navigateToAlbumsPhotos();
    guide.clickAlbumsPhotos();
    cy.url().should('include', albumsPhtos.URL)
  })
})