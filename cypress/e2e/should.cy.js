it("find the required elemeent and get it",()=>{
    cy.visit('/Dropdown-Checkboxes-RadioButtons/index.html') // open the page of the website i want to test 
    cy.get("#dropdowm-menu-2").should('be.visible')
    cy.get('h1').should('have.text',"Dropdown Menu(s), Checkboxe(s) & Radio Button(s)")
    cy.get('h1').should('contain',"Dropdown Menu(s)")
    cy.get('#dropdowm-menu-3').should('have.attr',"id","dropdowm-menu-3")
    cy.url().should('contain',"https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
    cy.title().should('eql','WebDriver | Dropdown Menu(s) | Checkboxe(s) | Radio Button(s)')
    //cy.go('back') // this command will click back on the browser 
    cy.getCookie('_gat_gtag_UA_228047513_1')//get and make u able to see the value of the cookie that has the matched name 
    cy.setCookie("level","all levels")// give you the ability to able to add cookie for the application u r running 
    cy.getCookies().should('have.length',1)
    



})
