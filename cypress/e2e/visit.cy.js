


it("should viit the wesite" , () => {

    cy.visit('/search',{
        qs:{
            q:"cypress",
            test:"test"
        }
    })
})