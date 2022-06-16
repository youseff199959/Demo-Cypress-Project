it("find the required elemeent and get it",()=>{
    cy.visit('/Actions/index.html') // open the page of the website i want to test 
    cy.get("#div-hover > div:nth-child(3) > button").trigger('mouseover')//hover over an elemnt 
    cy.get("#click-box").trigger('mousedown').wait(1000)
    cy.get("#click-box").trigger('mouseup')//hover over an elemnt 

})
