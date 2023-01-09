describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

// Do the number buttons update the display of the running total?
// Do the arithmetical operations update the display with the result of the operation?

  it('should display 2 when subtracting 5 from 7', () => {
    cy.get('#number7').click();
    cy.get('#operator-subtract').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '2')
  })

  it('should display 24 when multiplying 3 with 8', () => {
    cy.get('#number3').click();
    cy.get('#operator-multiply').click();
    cy.get('#number8').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '24')
  })
  
  // Can multiple operations be chained together?
  
  it('should display 132 when multiplying 2 with 6, then multiplying the result by 11', () => {
    cy.get('#number2').click();
    cy.get('#operator-multiply').click();
    cy.get('#number6').click();
    cy.get('#operator-multiply').click();
    cy.get('#number1').click();
    cy.get('#number1').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '132')
  })

  // Is the output as expected for a range of numbers (for example, positive, negative, decimals and very large numbers)?

  it('should display 110.4 when multiplying 55.2 with 2', () => {
    cy.get('#number5').click();
    cy.get('#number5').click();
    cy.get('#decimal').click();
    cy.get('#number2').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '110.4')
  })
  
  it('should display -5 when subtracting 10 from 5', () => {
    cy.get('#number5').click();
    cy.get('#operator-subtract').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-5')
  })
  
  it('should display 151384984128 when multiplying 64364364 by 2352', () => {
    cy.get('#number6').click();
    cy.get('#number4').click();
    cy.get('#number3').click();
    cy.get('#number6').click();
    cy.get('#number4').click();
    cy.get('#number3').click();
    cy.get('#number6').click();
    cy.get('#number4').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#number3').click();
    cy.get('#number5').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '151384984128')
  })

  // What does the code do in exceptional circumstances? Specifically, if you divide by zero, what is the effect? Write a test to describe what you'd prefer to happen, and then correct the code to make that test pass (you will need to modify the Calculator model to meet this requirement).

  it('should return undefined when dividing 10 by 0', () => {
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'Error')
  })

})