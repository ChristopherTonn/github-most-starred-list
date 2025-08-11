describe('Repo List Item', () => {
  beforeEach(() => {
    cy.visit('/repos');

    cy.contains('Most starred github repositories', { timeout: 10000 }).should('be.visible');

    cy.get('app-repo-list-item, li.list-row, [class*="repo-item"]', { timeout: 10000 }).should(
      'have.length.at.least',
      1
    );
  });

  it('should display repo list items', () => {
    cy.get('app-repo-list-item, li.list-row, [class*="repo-item"]').should(
      'have.length.at.least',
      1
    );
  });

  it('should show profile picture', () => {
    cy.get('app-repo-list-item img, li img, [class*="repo-item"] img')
      .first()
      .should('be.visible')
      .and('have.attr', 'src');
  });

  it('should display title', () => {
    cy.get('app-repo-list-item, li.list-row, [class*="repo-item"]')
      .first()
      .invoke('text')
      .should('not.be.empty');
  });

  it('should display description', () => {
    cy.get('app-repo-list-item, li.list-row, [class*="repo-item"]')
      .first()
      .invoke('text')
      .should('match', /[A-Za-z\s]{10,}/);
  });

  it('should show stars count', () => {
    cy.get('app-repo-list-item, li.list-row, [class*="repo-item"]')
      .first()
      .invoke('text')
      .should('match', /\d+/);
  });
});
