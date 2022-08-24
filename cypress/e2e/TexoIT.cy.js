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

  it('ler HTML e salvar dados em json', () => {
    cy.get("pre").then(($el) => {
      const text = $el.text(); // Obtemos o texto
      const separeTextToJson = JSON.parse(text) // transforma em JSON
      expect(separeTextToJson).to.not.equal(null);
    })
  })
})