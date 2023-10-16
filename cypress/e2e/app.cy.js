describe('Create react app home', () => {
  const siteTest = 'https://ecommerce-playground.lambdatest.io/'
  const localHost = 'http://localhost:3000'

  beforeEach(() => {
    cy.request(siteTest).then((response) => {
      if (response.isOkStatusCode) {
        cy.visit(siteTest);
      } else {
        cy.visit(siteTest);
      }
    });
  
    cy.injectAxe();
  });

  it('renders learn react link', () => {
    cy.contains('Learn React');
    cy.checkA11y()
  })

});