const menuStruct = 'nav ul li';
const menuGuide = 'Guide';

class HomePage {
    menuGuide() {
        const menu = cy.get(menuStruct)
        menu.contains(menuGuide)
        menu.click()
    }
}
export default HomePage