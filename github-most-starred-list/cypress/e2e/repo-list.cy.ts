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
  describe('Infinite Scroll', () => {
    it('should load more repositories when scrolling down', () => {
      cy.visit('/repos');

      cy.get('li.list-row', { timeout: 10000 }).should('be.visible');

      cy.get('li.list-row').then(($initialItems) => {
        const initialCount = $initialItems.length;

        cy.get('.github-section__repo-list').scrollTo('bottom');

        cy.wait(2000);

        cy.get('li.list-row').should('have.length.gt', initialCount);
      });
    });
  });
});
