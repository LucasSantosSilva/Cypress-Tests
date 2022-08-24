const linkalbumsPhotos = '/albums/1/photos';
const routes = 'ul li';

class GuidePage {
    constructor() {
        this.URL = '/guide';
      }

    navigateToAlbumsPhotos() {
        cy.get(routes)
        .contains(linkalbumsPhotos)
        .scrollIntoView()
    }
    clickAlbumsPhotos() {
        cy.contains(linkalbumsPhotos)
        .click()
    }
}

export default GuidePage
