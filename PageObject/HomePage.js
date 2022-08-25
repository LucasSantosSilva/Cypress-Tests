const menuStruct = 'nav ul li';
const menuGuide = 'Guide';

class HomePage {
    menuGuide() {
        cy.get(menuStruct)
        .contains(menuGuide)
        .click()
    }
}
export default HomePage