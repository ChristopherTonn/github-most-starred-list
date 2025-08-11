describe('Repo List', () => {
  beforeEach(() => {
    cy.visit('/repos');
  });

  it('should display the repo list page', () => {
    cy.get('[class*="github"], [class*="repo-list"], main, section').should('be.visible');

    cy.contains('Most starred github repositories').should('be.visible');
  });

  it('should show at least one list item', () => {
    cy.get('app-repo-list-item, li, [class*="repo-item"]', { timeout: 10000 }).should(
      'have.length.at.least',
      1
    );
  });
});
