describe('Repo List Item', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display repo list items', () => {
    cy.get('app-repo-list-item').should('exist');
  });

  it('should show profile picture', () => {
    cy.get('app-repo-list-item img').should('be.visible');
  });

  it('should display title', () => {
    cy.get('.repo-list-item__title').should('contain.text', 'Titel');
  });

  it('should display description', () => {
    cy.get('.repo-list-item__description').should('contain.text', 'Description');
  });

  it('should show stars badge', () => {
    cy.get('.badge--stars').should('contain.text', 'Stars');
  });
});
