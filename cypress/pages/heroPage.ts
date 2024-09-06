export class HeroPage {
  get searchField() {
    return cy.get("#character-navbar");
  }
  get characterLikeButton() {
    return cy.get("#character-like-button");
  }
  get characterName() {
    return cy.get("#character-name");
  }
  get characterComicList() {
    return cy.get("#character-comic-list");
  }

  visitar(heroId: number) {
    cy.visit(Cypress.env("baseUrl") + `/personagem/${heroId}`);
  }

  favoritarHeroi() {
    this.characterLikeButton.click();
  }

  avaliarHeroi(stars: number) {
    cy.get(`#rating-stars-star-${stars}`).click()
  }
}
