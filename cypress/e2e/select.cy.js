
it("find the required elemeent and get it",()=>{
    cy.visit('/Dropdown-Checkboxes-RadioButtons/index.html') // open the page of the website i want to test 
    cy.get("#dropdowm-menu-1").select("Python")
    cy.get("#dropdowm-menu-2").select(2)
   
})