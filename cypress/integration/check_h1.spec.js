describe('The Home Page', function() {
  it('Page successfully loads', function() {
    cy.visit('/')
  })

  it('h1 containers Unilever', () => {
    cy.get('h1').should('contain', 'Unilever')
  })
})