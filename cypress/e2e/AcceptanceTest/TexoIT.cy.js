import HomePage from "../../../pageObject/homePage.js"
import GuidePage from "../../../pageObject/guidePage.js"
import AlbumsphtosPage from "../../../pageObject/albumsphotosPage.js"

const home = new HomePage();
const guide = new GuidePage();
const albumsPhotos = new AlbumsphtosPage();
var arrayJson = [];

describe('Texo IT', () => {
  it('Verifica se acessa o menu guide', () => {

    cy.visit(Cypress.config().baseUrl);
    home.menuGuide();
    cy.url().should('include', guide.URL)
  })

  it('Navegar e abrir a rota /albums/1/photos', () => {
    guide.navigateToAlbumsPhotos();
    guide.clickAlbumsPhotos();
    cy.url().should('include', albumsPhotos.URL)
  })

  it('ler HTML e salvar dados em json', () => {
    cy.get("pre").then(($el) => {
      const text = $el.text(); // Obtemos o texto
      arrayJson = JSON.parse(text) // transforma em JSON
      expect(arrayJson).to.not.equal(null);
    })
  })

  it('Verifica elemento 6 do array', () => {
    const elementID = 5;
    const arrayElement = albumsPhotos.readElementPostion(arrayJson, elementID)
    expect(arrayElement)
      .contains('accusamus ea aliquid et amet sequi nemo')
      .contains('https://via.placeholder.com/600/56a8c2')
      .contains('https://via.placeholder.com/150/56a8c2')
      .contains('"albumId":1')
  })
})
