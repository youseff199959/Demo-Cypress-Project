var arr = ["iphone-x","ipad-mini","macbook-16"]


arr.forEach(element => {
    it("should open the website in diffrenet views" , ()=>{

   
        cy.viewport(element)
        cy.visit('/')

})
});