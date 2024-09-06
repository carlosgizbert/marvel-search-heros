import { HomePage } from "../../pages/homePage";

describe("E2E - Caminho feliz", () => {
  const homePage = new HomePage();
  const VALID_HERO_NAME = "Hulk";

  it("Deve buscar herói existente", () => {
    homePage.visitar();
    homePage.searchHero(VALID_HERO_NAME);

    cy.location("href").should("include", `?buscar=${VALID_HERO_NAME}`);
    homePage.homeCharacterList.should("exist");
    homePage.charactersCounter.contains("mostrando");
  });

  it("Deve favoritar 5 heróis", () => {
    homePage.visitar();
    homePage.searchHero(VALID_HERO_NAME);

    const heroIds = [1009351, 1011005, 1011118, 1017107, 1017333];
    heroIds.map((id) => {
      homePage.favoriteHero(id);
    });
  });
});
