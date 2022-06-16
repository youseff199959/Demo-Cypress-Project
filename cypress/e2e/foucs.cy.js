

it("find the required elemeent and get it",()=>{
    cy.visit('cypress/e2e/index.html') // open the page of the website i want to test 
    cy.get("#fname").focus().type("testtttt")// focus on the text field then type in the text filed "testttttt"
    cy.get("#fname").blur()
    
})
