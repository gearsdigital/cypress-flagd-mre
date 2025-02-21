describe('template spec', () => {
  it('passes opening the portal', () => {
    cy.visit('/portal');
    cy.get('e-page-header').should('be.visible');
  })

  it('passes opening the catalog', () => {
    cy.visit('/catalog/product/H31ODDII');
    cy.get('e-page-header').should('be.visible');
  })
})
