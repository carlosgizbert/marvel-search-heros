import { HomePage } from "../pages/homePage";

describe('E2E - Caminho Feliz', () => {

    const VALID_HERO_NAME = 'Hulk'
    const homePage = new HomePage();

    it('Buscar herói existente', () => {
        homePage.visitar();
        homePage.searchHero(VALID_HERO_NAME)
        cy.location('href').should('include', '?buscar=Hulk');
        homePage.homeCharacterList.should('exist')
        homePage.charactersCounter.contains('mostrando')
    });
});