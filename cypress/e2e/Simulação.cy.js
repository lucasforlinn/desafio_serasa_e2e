describe('Simulações de emprestimos', () => {
  
  
  it('Simular emprestimo de 1000R$ em 6 vezes', () => {
    cy.on('uncaught:exception', (e) => {
      if (e.message.includes('WebFont is not defined')) {
        return false
      }})
      
      const valorEmprestimo = 1000
      const mesesPagamento = 6
      const valorParcela = 271.27

      cy.simulaParcelaEmprestimo(valorEmprestimo, mesesPagamento, valorParcela)
  })

  it('Simular emprestimo de 4000R$ em 12 vezes', () => {
    cy.on('uncaught:exception', (e) => {
      if (e.message.includes('WebFont is not defined')) {
        return false
      }})
      
      const valorEmprestimo = 4000
      const mesesPagamento = 12
      const valorParcela = 478.49

      cy.simulaParcelaEmprestimo(valorEmprestimo, mesesPagamento, valorParcela)
  })

  it('Simular emprestimo de 6000R$ em 24 vezes', () => {
    cy.on('uncaught:exception', (e) => {
      if (e.message.includes('WebFont is not defined')) {
        return false
      }})
      
      const valorEmprestimo = 6000
      const mesesPagamento = 24
      const valorParcela = 347.89

      cy.simulaParcelaEmprestimo(valorEmprestimo, mesesPagamento, valorParcela)
  })
})

