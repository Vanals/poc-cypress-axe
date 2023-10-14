describe('Create react app home', () => {

  beforeEach(() => {
    // cy.configureAxe({
    //   rules: {
    //     'landmark-one-main': { enabled: false},
    //   },
    // })
    cy.request('http://localhost:3000').then((response) => {
      if (response.isOkStatusCode) {
        cy.visit('http://localhost:3000');
      } else {
        cy.visit('http://localhost:3000');
      }
    });
    cy.injectAxe();
  });
  it('renders learn react link', () => {
    cy.contains('Learn React');


    cy.checkA11y()

    // cy.checkA11y(null,{
    //   rules: {
    //     'landmark-one-main': { enabled: false },
    //     'page-has-heading-one': { enabled: false },
    //   },
    // });

  })

});