
it("find the required elemeent and get it",()=>{
    cy.visit('/Dropdown-Checkboxes-RadioButtons/index.html') // open the page of the website i want to test 
    cy.get("#dropdowm-menu-1",{
        log:"done and found"
    })//find the element using the id name
    cy.get(".dropdown-menu-lists")//find the element using the class name 
    cy.get('[value="green"]')//find the element using the attubuite name 
    cy.get("input").first()//get the first element that has input tag
    cy.get("input").last()//get the last elemet that has tag last 
    cy.get("input").eq(5)//get a specific element using it's index number 
    cy.get("input").filter('[name="color"]')//get a spcific element using a filter condition 
    cy.get("body > div").children()//get all this elements childern 
    cy.get("#radio-buttons").children('[value="green"]')//get a child from the element childeren using element selctor 
    cy.get("#radio-buttons").children('[type="radio"]').first()//get the first child that match the filter condition 
    cy.get("#radio-buttons").children('[type="radio"]').eq(0)//get the index child that match the condition 
    cy.get("#radio-buttons").find('[value="green"]')//get a child that match the condition 
    cy.get("#radio-buttons").parent()//get the parent class of the selected element 
    cy.get("#radio-buttons").parents()//get all parents classes of the selected element 
    cy.get("#radio-buttons > input[type=radio]:nth-child(5)").siblings()//get all element siblings (the elemenst in that has the same parent) 
    cy.contains("Option 4")//get an element that contain the text you want to search for 
    cy.get(".thumbnail").contains("Checkboxe(s)")//search for an element that has the text you entered in the class you selected before 
    cy.get('#dropdowm-menu-1')//get an element from the cypress lanuch and select a specific elemnt and copt the text 
})