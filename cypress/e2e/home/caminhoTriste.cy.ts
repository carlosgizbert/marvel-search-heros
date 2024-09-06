import { HomePage } from "../../pages/homePage";

describe("E2E - Caminho triste", () => {
  const homePage = new HomePage();
  const VALID_HERO_NAME = "Hulk";
  const INVALID_HERO_NAME = "Abobora";

  it("Busca herói inexistente.", () => {
    homePage.visitar();
    homePage.searchHero(INVALID_HERO_NAME);

    cy.location("href").should("include", `?buscar=${INVALID_HERO_NAME}`);
    homePage.homeCharacterList.should("exist");
  });

  it("Deve impedir de favoritar mais que 5 heróis", () => {
    homePage.visitar();
    homePage.searchHero(VALID_HERO_NAME);

    const heroIds = [1009351, 1011005, 1011118, 1017107, 1017333, 1017303];
    heroIds.map((id, index) => {
      homePage.favoriteHero(id);
      if (index === 6) {
        homePage.favoriteHero(id);
      }
    });
    cy.on("window:alert", (alertText) => {
      expect(alertText).to.equal(
        "Você possui 5 heróis favoritados, não é possível favoritar mais heróis."
      );
    });
  });
});
