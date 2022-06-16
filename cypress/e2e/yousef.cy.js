/// <reference types="Cypress" />


describe("first test suite and testing it using cypress",()=>{
    before(()=>{

        cy.log("test before")
    })
    beforeEach(()=>{
        cy.log("test before each")

    })
    after(()=>{

        cy.log("test after")
    })
    afterEach(()=>{
        cy.log("test after each")

    })



    it("heeloo woorrllldd" , ()=>{
        cy.log("heeellooo woooorrrlllllddd")
    })
})
describe("second test suite and testing it using cypress",()=>{
    it("heeloo woorrllldd" , ()=>{
        cy.log("heeellooo woooorrrlllllddd")
    })
})


