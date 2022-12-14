Cypress.Commands.add('simulaParcelaEmprestimo', (valorE, meses, valorP)=> {
    cy.visit('/')
        cy.get('#slider-range')
          .invoke('val', valorE)
          .trigger('change')
  
        cy.get('#slider-range-month')
          .invoke('val', meses)
          .trigger('change')
  
        cy.get('#price-number').should('have.text', valorP)
  })