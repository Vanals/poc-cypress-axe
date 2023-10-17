describe('Accessibility', () => {
  const dummyWebsiteForAutomationTesting = 'https://ecommerce-playground.lambdatest.io/'
  const localHost = 'http://localhost:3000'

  it('should run accessibility tests', () => {
    cy.visit(dummyWebsiteForAutomationTesting);

    cy.injectAxe();
    // Tests the whole page
    cy.checkA11y()
  })

});