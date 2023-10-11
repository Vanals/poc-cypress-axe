describe('Create react app home', () => {
  beforeEach(() => {
    cy.request('http://localhost:3000').then((response) => {
      if (response.isOkStatusCode) {
        cy.visit('http://localhost:3000');
      } else {
        cy.visit('http://localhost:3000');
      }
    });
  });
  it('renders learn react link', () => {
    cy.contains('Learn React');
  });
});