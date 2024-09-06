import { HeroPage } from "../../pages/heroPage";

describe("E2E - Caminho feliz", () => {
  const heroPage = new HeroPage();
  const VALID_HERO_ID = 1016181;

  it("Deve buscar herói existente", () => {
    heroPage.visitar(VALID_HERO_ID);
    heroPage.characterName.should('exist');
    heroPage.characterLikeButton.should('exist');
    heroPage.characterComicList.should('exist')
  });

  it("Deve favoritar o herói com 5 estrelas", () => {
    heroPage.visitar(VALID_HERO_ID);
    heroPage.avaliarHeroi(1);
    cy.wait(500)
    heroPage.avaliarHeroi(2);
    cy.wait(500)
    heroPage.avaliarHeroi(3);
    cy.wait(500)
    heroPage.avaliarHeroi(4);
    cy.wait(500)
    heroPage.avaliarHeroi(5);
  });

  it("Deve desfavoritar herói", () => {
    heroPage.visitar(VALID_HERO_ID);
    heroPage.avaliarHeroi(5);
    cy.wait(500)
    heroPage.avaliarHeroi(5);
  });

});
