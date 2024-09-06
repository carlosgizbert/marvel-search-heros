export class HomePage {
  get searchField() {
    return cy.get("#home-search-field");
  }
  get charactersCounter() {
    return cy.get("#home-characters-counter");
  }
  get filterControls() {
    return cy.get("#home-filter-controls-orderBy");
  }
  get filterControlsButtonLike() {
    return cy.get("#home-filter-controls-button-like");
  }
  get homeCharacterList() {
    return cy.get("#home-character-list");
  }
  get homeCharacterListCharacters() {
    return cy.get("#home-character-list-characters");
  }

  visitar() {
    cy.visit(Cypress.env("baseUrl"));
  }

  clickSearch() {
    this.searchField.click();
  }

  digitHero(heroName: string) {
    this.searchField.type(heroName);
  }

  favoriteHero(heroId: number) {
    cy.get(`#home-character-button-like-${heroId}`).click();
  }

  searchHero(heroName: string) {
    this.clickSearch();
    this.digitHero(heroName);
    this.searchField.type("{enter}");
  }
}
