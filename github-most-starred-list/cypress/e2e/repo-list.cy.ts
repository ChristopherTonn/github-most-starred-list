describe('Repo List', () => {
  beforeEach(() => {
    cy.visit('/repos');
  });

  it('should display the repo list page', () => {
    cy.get('.github-section').should('be.visible');
    cy.contains('Most starred github repositories of the last 30 days').should('be.visible');
  });

  it('should show at least one list item', () => {
    cy.get('.github-section__repo-list li.list-row', { timeout: 10000 }).should(
      'have.length.at.least',
      1
    );
  });
});
