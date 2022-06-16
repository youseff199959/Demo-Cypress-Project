it("find the required elemeent and get it",()=>{
    cy.visit('/Dropdown-Checkboxes-RadioButtons/index.html') // open the page of the website i want to test 
    cy.get('[type="checkbox"]').eq(1).check()//check an element that is sleected and match the filter index entered 
    cy.get('[type="checkbox"]').eq(2).uncheck()//uncheck an element that is sleected and match the filter index entered 

   
})