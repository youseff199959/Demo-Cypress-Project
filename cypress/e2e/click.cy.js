
it("find the required elemeent and get it",()=>{
    cy.visit('/Dropdown-Checkboxes-RadioButtons/index.html') // open the page of the website i want to test 
    cy.get("input[type=checkbox]").click('topLeft',{ multiple: true })//click on the all elemnts found because { multiple: true } on thier topleft postion
})


it("find the required elemeent and get it",()=>{
    cy.visit('/Actions/index.html') // open the page of the website i want to test 
    cy.get("#double-click").dblclick()//double click the selected element

})

it("find the required elemeent and get it",()=>{
    cy.visit('/Actions/index.html') // open the page of the website i want to test 
    cy.get("#click-box").rightclick()//right click the selected element  

})