
it("find the required elemeent and get it",()=>{
    cy.visit('/Contact-Us/contactus.html') // open the page of the website i want to test 
    cy.get("#contact_form > input:nth-child(1)").type("tessttt{selectAll}",{
        delay : 1000
    })//get the first text filed and type inside it 
   
})